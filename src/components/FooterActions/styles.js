import {StyleSheet} from 'react-native';
import Responsive from '../../modules/utils/responsive';

const styles = StyleSheet.create({
  largerArrowIcon: {
    width: Responsive.h(9),
    height: Responsive.h(14),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.h(18),
    paddingVertical: Responsive.h(10),
  },
});

export default styles;
