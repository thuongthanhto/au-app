import { StyleSheet, Dimensions } from 'react-native';

import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.BLACK
  },
  body: {
    flex: 1,
    width,
    paddingVertical: Responsive.h(20),
    backgroundColor: colors.MAIN_BACKGROUND
  },
  topWrap: {
    height: Responsive.v(7),
    backgroundColor: '#00AAEA',
  },
  title: {
    fontFamily: 'PTSans-Bold',
    fontSize: Responsive.h(27),
    paddingHorizontal: Responsive.h(16),
    paddingBottom: Responsive.h(16),
    color: colors.RED
  },
  itemMealContainer: {
    padding: Responsive.h(16),
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY
  },
  flexRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemMealTitle: {
    color: '#00AAEA',
    fontSize: Responsive.h(20),
    fontFamily: 'PTSans-Bold'
  },
  itemMealSubTitle: {
    fontFamily: 'PTSans-Regular',
    fontSize: Responsive.h(16),
    color: colors.TEXT_BUTTON,
    paddingTop: Responsive.h(5)
  },
  chartContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  imagesContent: {
    marginBottom: Responsive.h(5),
    marginRight: Responsive.h(5)
  },
  valueContent: {
    fontFamily: 'PTSans-Regular',
    fontSize: Responsive.h(11),
    color: colors.TEXT_BUTTON
  },
  activityText: {
    fontFamily: 'PTSans-Bold',
    color: colors.BLACK,
    fontSize: Responsive.h(11),
    paddingVertical: Responsive.h(10)
  }
});

export default styles;

