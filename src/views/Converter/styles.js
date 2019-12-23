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
    paddingHorizontal: Responsive.h(50),
    paddingVertical: Responsive.h(20),
    backgroundColor: colors.MAIN_BACKGROUND
  },
  topWrap: {
    height: Responsive.v(7),
    backgroundColor: '#00AAEA',
  },
  title: {
    fontFamily: 'PTSans-Regular',
    fontSize: Responsive.h(18),
    paddingBottom: Responsive.h(10)
  },
  description: {
    fontFamily: 'PTSans-Regular',
    fontSize: Responsive.h(14),
    paddingTop: Responsive.h(15)
  },
  input: {
    height: Responsive.h(60),
    borderWidth: 1,
    borderColor: colors.BLACK,
    borderRadius: Responsive.h(4),
    backgroundColor: colors.WHITE,
    textAlign: 'center',
    fontSize: Responsive.h(35),
    fontFamily: 'PTSans-Bold'
  }
});

export default styles;
