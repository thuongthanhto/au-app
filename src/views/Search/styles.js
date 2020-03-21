import {StyleSheet, Dimensions} from 'react-native';

import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.BLACK,
  },
  body: {
    flex: 1,
    width,
    paddingVertical: Responsive.h(20),
    backgroundColor: colors.MAIN_BACKGROUND,
  },
  summaryWrap: {
    paddingHorizontal: Responsive.h(16),
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
    color: colors.RED,
  },
  noResultText: {
    fontFamily: 'PTSans-Bold',
    color: colors.BLACK,
    fontSize: Responsive.h(20),
    paddingHorizontal: Responsive.h(10),
    paddingVertical: Responsive.h(30),
  },
  itemMealContainer: {
    padding: Responsive.h(16),
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#B4ABAA',
  },
  flexRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToMealContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.GRAY,
    borderWidth: 1,
    backgroundColor: '#E1E1E1',
    borderRadius: Responsive.h(4),
    padding: Responsive.h(10),
    marginTop: Responsive.h(8),
  },
  itemMealTitle: {
    color: '#00AAEA',
    fontSize: Responsive.h(20),
    fontFamily: 'PTSans-Bold',
  },
  itemMealSubTitle: {
    fontFamily: 'PTSans-Bold',
    fontSize: Responsive.h(14),
    color: colors.BLACK,
    paddingTop: Responsive.h(5),
  },
  itemMealSubTitleSize: {
    fontFamily: 'PTSans-Regular',
    fontSize: Responsive.h(14),
    paddingTop: Responsive.h(5),
  },
  chartContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  imagesContent: {
    marginBottom: Responsive.h(5),
    marginRight: Responsive.h(5),
  },
  valueContent: {
    fontFamily: 'PTSans-Regular',
    fontSize: Responsive.h(11),
    color: colors.TEXT_BUTTON,
  },
  activityText: {
    fontFamily: 'PTSans-Bold',
    color: colors.BLACK,
    fontSize: Responsive.h(11),
    paddingVertical: Responsive.h(10),
  },
  input: {
    height: Responsive.h(40),
    width: Responsive.h(60),
    borderWidth: 1,
    borderColor: '#657A93',
    borderRadius: Responsive.h(8),
    backgroundColor: '#FFFFFD',
    textAlign: 'center',
    fontSize: Responsive.h(18),
    fontFamily: 'PTSans-Bold',
  },
  filterContainer: {
    backgroundColor: '#ED1845',
    padding: Responsive.h(15),
  },
});

export default styles;
