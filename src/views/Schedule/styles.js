import { StyleSheet, Dimensions } from 'react-native';

import Responsive from '../../modules/utils/responsive';
import { colors } from '../../modules/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.SCHEDULE_BACKGROUND,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: Responsive.h(15),
    alignItems:'center'
  },
  contentContainerStyle: {
    flex: 1,
    backgroundColor: colors.SCHEDULE_BACKGROUND
  },

  // schedule item
  itemContainer: {
    backgroundColor: colors.SCHEDULE_ITEM,
    margin: Responsive.h(15),
    marginVertical: Responsive.h(7),
    width: width - Responsive.h(30),
    paddingVertical: Responsive.h(15),
    paddingHorizontal: Responsive.h(10),
  },
  content: {
    width: '100%'
  },
  tagsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: Responsive.v(10)
  },
  tagItem: {
    width: Responsive.h(25),
    height: Responsive.v(4),
    borderRadius: Responsive.h(2),
    marginLeft: Responsive.h(4)
  },
  dateItem: {
    color: colors.WHITE,
    fontSize: Responsive.h(18),
    fontWeight: 'bold',
    paddingBottom: Responsive.v(10)
  },
  titleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scheduleName: {
    width: '70%',
    color: colors.LIGHT_GRAY,
    fontSize: Responsive.h(16),
    fontWeight: '600'
  },
  timeItem: {
    width: '30%',
    color: colors.LIGHT_GRAY,
    fontSize: Responsive.h(14),
    textAlign: 'right'
  },
  timeUpdated: {
    color: colors.LIGHT_GRAY,
    fontSize: Responsive.h(12),
    paddingTop: Responsive.v(20)
  },
  swipeContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.SCHEDULE_BACKGROUND,
  },
  textSwipeBtn: {
    color: colors.WHITE,
    fontSize: Responsive.h(13),
  },

  // Filter component
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - Responsive.h(30),
    marginVertical: Responsive.v(15)
  },
  taskRemain: {
    width: '35%'
  },
  remainText: {
    color: colors.WHITE,
    fontSize: Responsive.h(15),
    fontWeight: '600'
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '65%'
  },
  filterText: {
    color: colors.LIGHT_GRAY,
    fontSize: Responsive.h(13),
    paddingLeft: Responsive.h(5),
    fontWeight: '600'
  },
  borderFilter: {
    borderRightWidth: 1,
    borderRightColor: colors.LIGHT_GRAY,
    paddingRight: Responsive.h(5)
  },
  filterActive: {
    color: colors.ACTIVE
  },

  // Add new task
  addContainer: {
    flex: 1,
    backgroundColor: colors.SCHEDULE_BACKGROUND,
  },
  inputForm: {
    fontSize: 12,
  },
  addTime: {
    flexDirection: 'row',
    width: width - Responsive.h(30),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addIcon: {
    position: 'absolute',
    bottom: Responsive.v(20),
    right: Responsive.h(20)
  },
  listTagContainer: {
    width: width - Responsive.h(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: Responsive.v(15)
  }
});

export default styles;