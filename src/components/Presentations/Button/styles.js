import { StyleSheet } from 'react-native';

import { colors } from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Responsive.h(5),
    backgroundColor: colors.GRAY
  },
  title: {
    color: colors.WHITE
  }
});

export default styles;
