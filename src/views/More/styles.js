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
    paddingHorizontal: Responsive.h(16),
    backgroundColor: colors.MAIN_BACKGROUND
  },
  bigArrowIcon: {
    width: Responsive.h(11),
    height: Responsive.h(16),
  },
  moreBigLeftIcon: {
    width: Responsive.h(25),
    height: Responsive.h(25),
  },
  bodyWhichOutlets: {
    flex: 1,
    width,
    paddingHorizontal: Responsive.h(10),
    paddingVertical: Responsive.h(20),
    backgroundColor: colors.MAIN_BACKGROUND
  },
  topWrap: {
    height: Responsive.v(7),
    backgroundColor: '#00AAEA',
  },
  title: {
    fontFamily: 'PTSans-Bold',
    fontSize: Responsive.h(40),
    paddingBottom: Responsive.v(5),
    color: colors.RED
  },
  content: {
    fontFamily: 'PTSans-Regular',
    fontSize: Responsive.h(16)
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paddingLine: {
    paddingTop: Responsive.v(15)
  },
  itemMenuRow: {
    flexDirection: 'row',
    width
  },
  itemColumn: {
    width: '50%'
  },
  titleItemMenu: {
    fontSize: Responsive.h(16),
    fontFamily: 'PTSans-Bold',
    width: '80%'
  },
  contentItemMenu: {
    fontSize: Responsive.h(16),
    fontFamily: 'PTSans-Regular',
    width: '100%'
  },
  subTitle: {
    fontSize: Responsive.h(18),
    fontFamily: 'PTSans-Bold'
  }
});

export default styles;
