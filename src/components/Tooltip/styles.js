import {StyleSheet} from 'react-native';

import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    marginHorizontal: Responsive.h(20),
    marginVertical: Responsive.h(30),
    borderRadius: Responsive.h(10),
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  closeIcon: {
    width: Responsive.h(23),
    height: Responsive.h(23),
  },
  body: {
    padding: Responsive.h(16),
  },
  titleTooltipUserinfo: {
    color: colors.RED,
    fontFamily: 'PTSans-Bold',
    fontSize: Responsive.h(16),
  },
});

export default styles;
