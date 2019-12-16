import React from 'react';
import moment from 'moment';
import Reinput from 'reinput';
import get from 'lodash.get';
import uuidv4 from 'uuid/v4';
import update from 'immutability-helper';
import { connect } from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { SafeAreaView, TouchableOpacity, View, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import { colors } from '../../modules/colors';
import { ListTag } from './Components/ListTag';
import Responsive from '../../modules/utils/responsive';
import { InputDatePicker } from '../../components/Form/Field';
import { Button } from '../../components/Button';
import { DEFAULT_TASK_MODEL } from '../../modules/utils/constants';
import { TAGS } from '../../modules/utils/mockData';
import { validationAddSchedule } from '../../modules/utils/helpers';
import { editTaskRequest, addTaskRequest } from '../../actions/Schedule';

class AddScheduleScreen extends React.Component {

  static navigationOptions = ({ navigation }: any) => ({
    title: navigation.getParam('isEdit') ? 'Edit Task' : 'Add Todo Task',
    headerStyle: {
      backgroundColor: colors.SCHEDULE_BACKGROUND,
      elevation: 0,
      borderBottomWidth: 0,
      borderBottomColor: 'transparent',
      height: Responsive.h(50),
    },
    headerTitleStyle: {
      color: colors.WHITE,
      fontSize: Responsive.h(18),
    },
    headerLeft: (
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack(null)}>
        <FeatherIcon name='chevron-left' size={Responsive.h(22)} color={colors.WHITE} />
      </TouchableOpacity>
    ),
  })

  constructor(props) {
    super(props);
    this.state = {
      task: props.navigation.getParam('task') || DEFAULT_TASK_MODEL,
      loading: false,
      errors: {}
    };
  }

  componentDidMount() {
  }

  mergeTags = (listDefault, list) => {
    const ids = list.map(e => e.tagId);
    const merged = [...list, ...listDefault.filter(e => !ids.includes(e.tagId))].sort((a, b) => b.tagId - a.tagId);
    return merged;
  }

  onUpdateData = (field, value) => {
    const { task } = this.state;
    const newTask = update(task, { [field]: { $set: value } });
    this.setState({ task: newTask });
  }

  handlePressTag = (list) => {
    const { task } = this.state;
    const tags = this.mergeTags(get(task, 'tags', []), list);
    this.onUpdateData('tags', tags);
  }

  handleSaveSchedule = () => {
    const errors = validationAddSchedule(this.state.task);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.setState({ loading: true });
      const values = this.state.task;
      if (this.props.navigation.getParam('isEdit')) {
        this.props.editTaskRequest(values, res => {
          this.setState({ loading: false });
          !res ? Alert('Error', 'Edit task failed') : this.props.navigation.goBack(null);
        });
      } else {
        values.taskId = uuidv4();
        values.updatedAt = values.startDate;
        this.props.addTaskRequest({...DEFAULT_TASK_MODEL, ...values}, res => {
          this.setState({ loading: false });
          !res ? Alert('Error', 'Add new task failed') : this.props.navigation.goBack(null);
        });
      }
    }
  }

  render() {
    const { task, loading, errors } = this.state;
    return (
      <KeyboardAwareScrollView
        style={styles.contentContainerStyle} 
        contentContainerStyle={styles.contentContainerStyle} 
        enableOnAndroid 
      >
        <SafeAreaView style={[styles.addContainer, { marginHorizontal: Responsive.h(15) }]}>
          <Reinput
            labelColor={colors.LIGHT_GRAY}
            labelActiveColor={colors.LIGHT_GRAY}
            underlineActiveColor={colors.LIGHT_GRAY}
            underlineColor={colors.LIGHT_GRAY}
            placeholderColor={colors.LIGHT_GRAY}
            color={colors.LIGHT_GRAY}
            label='Title' 
            defaultValue={get(task, 'title', '')}
            error={get(errors, 'title', '')}
            onChangeText={(value) => this.onUpdateData('title', value)}
          />
          <Reinput
            labelColor={colors.LIGHT_GRAY}
            labelActiveColor={colors.LIGHT_GRAY}
            underlineActiveColor={colors.LIGHT_GRAY}
            underlineColor={colors.LIGHT_GRAY}
            placeholderColor={colors.LIGHT_GRAY}
            color={colors.LIGHT_GRAY}
            label='Description' 
            defaultValue={get(task, 'description', '')}
            error={get(errors, 'description', '')}
            onChangeText={(value) => this.onUpdateData('description', value)}
          />
          <InputDatePicker 
            label='Start date' 
            mode='date'
            defaultValue={moment(task.startDate).format('ddd, DD MMM YYYY')}
            error={get(errors, 'startDate', '')}
            onChangeDate={(value) => this.onUpdateData('startDate', moment(value).valueOf())} 
          />
          <View style={styles.addTime}>
            <View style={{ width: '47%' }}>
              <InputDatePicker 
                label='Start time' 
                mode='time'
                defaultValue={moment(task.startTime).format('HH:mm')}
                error={get(errors, 'startTime', '')}
                onChangeDate={(value) => this.onUpdateData('startTime', moment(value).valueOf())} 
              />
            </View>
            <View style={{ width: '47%' }}>
              <InputDatePicker 
                label='End time' 
                mode='time'
                defaultValue={moment(task.endTime).format('HH:mm')}
                error={get(errors, 'endTime', '')}
                onChangeDate={(value) => this.onUpdateData('endTime', moment(value).valueOf())} 
              />
            </View>
          </View>
          <ListTag list={this.mergeTags(TAGS, get(task, 'tags', []))} onPressTag={this.handlePressTag} />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Button
              width={Responsive.h(150)}
              height={Responsive.h(40)}
              text='Spara'
              loading={loading}
              disabled={loading}
              onPress={this.handleSaveSchedule}
            />
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  addTaskRequest,
  editTaskRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleScreen);