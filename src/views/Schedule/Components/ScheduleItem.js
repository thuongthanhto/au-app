import React from 'react';
import moment from 'moment';
import Swipeout from 'react-native-swipeout';
import { View, Text, StyleSheet } from 'react-native';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import { ButtonSwipe } from './ButtonSwipe';
import { Card } from '../../../components/Card';
import { colors } from '../../../modules/colors';
import { FILTER_TAB } from '../../../modules/utils/constants';

export default class ScheduleItem extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      isClose: true
    };
  }

  renderSwipeOutBtns = (task) => {
    const DeleteBtn = (
      <ButtonSwipe
        text='Remove'
        onPress={this.props.onRemove}
        Icon={<EvilIconsIcons color={colors.RED} size={30} name='trash' />}
      />
    );
    const BookMarkBtn = (
      <ButtonSwipe
        text='Book mask'
        onPress={this.props.onBookMark}
        Icon={<MaterialIcons size={20} name='star' color={task.bookmark ? colors.YELLOW : colors.WHITE} />}
      />
    );
    const EditBtn = (
      <ButtonSwipe
        text='Edit'
        onPress={this.props.onEditTask}
        Icon={<MaterialCommunityIcons size={20} name='square-edit-outline' color={colors.WHITE} />}
      />
    );
    return [{ component: DeleteBtn }, { component: BookMarkBtn }, { component: EditBtn }];
  }

  renderSwipeStatusBtns = (task) => {
    const TodoBtn = (
      <ButtonSwipe
        text='To do'
        onPress={() => this.props.onUpdateStatus(FILTER_TAB.TO_DO)}
        disabled={task.status === FILTER_TAB.TO_DO}
        Icon={<MaterialIcons color={task.status === FILTER_TAB.TO_DO ? colors.GREEN : colors.WHITE} size={25} name='event-available' />}
      />
    );
    const InProgressBtn = (
      <ButtonSwipe
        text='In progress'
        onPress={() => this.props.onUpdateStatus(FILTER_TAB.IN_PROGRESS)}
        disabled={task.status === FILTER_TAB.IN_PROGRESS}
        Icon={<MaterialCommunityIcons color={task.status === FILTER_TAB.IN_PROGRESS ? colors.GREEN :colors.WHITE} size={25} name='progress-clock' />}
      />
    );

    const CompletedBtn = (
      <ButtonSwipe
        text='Completed'
        onPress={() => this.props.onUpdateStatus(FILTER_TAB.COMPLETED)}
        disabled={task.status === FILTER_TAB.COMPLETED}
        Icon={<MaterialIcons color={task.status === FILTER_TAB.COMPLETED ? colors.GREEN :colors.WHITE} size={25} name='done' />}
      />
    );
    return [{ component: TodoBtn }, { component: InProgressBtn }, { component: CompletedBtn }];
  }

  render() {
    const { color, onPress, task } = this.props;
    return (
      <Swipeout
        close={this.state.isClose}
        sensitivity={20}
        right={this.renderSwipeOutBtns(task)}
        left={this.renderSwipeStatusBtns(task)}
        backgroundColor={colors.SCHEDULE_BACKGROUND}
        onOpen={this.onSwipe}
      >
        <Card onPress={onPress} style={StyleSheet.flatten([styles.itemContainer, color && { color }])}>
          <View style={styles.tagsContainer}>
            {task.bookmark && (
              <MaterialIcons size={20} name='star' color={colors.YELLOW} />
            )}
            {task.tags.map(item => <View key={item.tagId} style={[styles.tagItem, { backgroundColor: colors[item.color.toUpperCase()] }]} />)}
          </View>
          <View style={styles.content}>
            <Text style={styles.dateItem}>{moment(task.startDate).format("ddd, DD MMM YYYY")}</Text>
            <View style={styles.titleItem}>
              <Text style={styles.scheduleName} numberOfLines={2}>{task.title}</Text>
              <Text style={styles.timeItem}>{`${moment(task.startTime).format("HH:mm")}-${moment(task.endTime).format("HH:mm")}`}</Text>
            </View>
            <Text style={styles.timeUpdated}>Updated at: {moment(task.updatedAt).format("ddd, DD MMM YYYY")}</Text>
          </View>
        </Card>
      </Swipeout>
    );
  }
}