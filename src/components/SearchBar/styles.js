import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.GRAY_SHADE,
    padding: Responsive.h(10),
    backgroundColor: colors.GRAY_SHADE,
    borderRadius: Responsive.h(8),
    overflow: 'hidden',
  },
  icon: {
    fontSize: Responsive.h(16),
    color: colors.GRAY,
  },
  input: {
    width: '99%',
    paddingLeft: Responsive.v(14),
    paddingRight: Responsive.v(10),
  }
});

export default styles;