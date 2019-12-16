import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import { colors } from '../../modules/colors';
import { NavigationRoutes } from '../../navigator/Routes';
import { FILTER_TAB } from '../../modules/utils/constants';
import Responsive from '../../modules/utils/responsive';
import { sortTaskByBookMark } from '../../modules/utils/helpers';
import SearchBar from '../../components/SearchBar';
import ScheduleItem from './Components/ScheduleItem';
import { getAllTaskRequest, bookMarkTaskRequest, removeTaskRequest, updateTaskStatusRequest, searchTaskRequest } from '../../actions/Schedule';
import { Filter } from './Components/Filter';

const { width } = Dimensions.get('window');

class ScheduleScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      filterActive: FILTER_TAB.TO_DO
    };
  }

  componentDidMount() {
    this.props.getAllTaskRequest();
  }

  onChangeSearhKeyword = (keyword) => {
    this.setState({ searchKeyword: keyword });
    this.props.searchTaskRequest(keyword);
  }

  handleEditTask = (task) => {
    this.props.navigation.navigate(NavigationRoutes.AddSchedule, { task, isEdit: true });
  }

  render() {
    const { searchKeyword, filterActive } = this.state;
    const listTask = !searchKeyword ? this.props.listTask : this.props.listTaskSearch;
    const tasksFilter = listTask.filter(e => e.status === filterActive);
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.contentContainerStyle} enableOnAndroid keyboardShouldPersistTaps="always">
        <SafeAreaView style={styles.container}>
          <SearchBar
            wrapperStyle={{ width: width - Responsive.v(30)}}
            placeholder="Search"
            value={searchKeyword}
            onChangeText={this.onChangeSearhKeyword}
          />
          <Filter
            taskRemain={listTask.filter(e => e.status === FILTER_TAB.TO_DO).length}
            filterActive={filterActive}
            onFilter={(value) => this.setState({ filterActive: value})}
          />
          <FlatList
            data={sortTaskByBookMark(tasksFilter)}
            renderItem={({item}) => (
              <ScheduleItem 
                task={item}
                onBookMark={() => this.props.bookMarkTaskRequest(item.taskId)}
                onRemove={() => this.props.removeTaskRequest(item.taskId)}
                onUpdateStatus={(status) => this.props.updateTaskStatusRequest({taskId: item.taskId, status })}
                onEditTask={() => this.handleEditTask(item)} 
              />
            )}
            keyExtractor={item => item.taskId}
            showsVerticalScrollIndicator={false}
          />
          <TouchableOpacity
            style={styles.addIcon} 
            onPress={() => this.props.navigation.navigate(NavigationRoutes.AddSchedule, { isEdit: false })}
          >
            <MaterialIcons size={40} name='add-circle' color={colors.WHITE} />
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  listTask: state.ScheduleReducer.listTask,
  listTaskSearch: state.ScheduleReducer.listTaskSearch
});

const mapDispatchToProps = {
  searchTaskRequest,
  getAllTaskRequest,
  removeTaskRequest,
  bookMarkTaskRequest,
  updateTaskStatusRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen);