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
});

export default styles;
