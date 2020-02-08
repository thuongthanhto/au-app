import {StyleSheet} from 'react-native';

import Responsive from '../../modules/utils/responsive';
import { colors } from '../../modules/colors';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    fontSize: Responsive.v(16),
    fontFamily: 'PTSans-Regular',
    paddingVertical: Responsive.v(8),
    paddingHorizontal: Responsive.h(8),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: Responsive.v(4),
    color: 'black',
    paddingRight: Responsive.v(30), // to ensure the text is never behind the icon
    backgroundColor: colors.GRAY_SHADE
  },
  inputAndroid: {
    width: '100%',
    fontSize: Responsive.v(16),
    fontFamily: 'PTSans-Regular',
    paddingHorizontal: Responsive.h(8),
    paddingVertical: Responsive.v(4),
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: Responsive.v(8),
    color: 'black',
    paddingRight: Responsive.v(30), // to ensure the text is never behind the icon
    backgroundColor: colors.GRAY_SHADE
  },
  iconContainer: {
    top: 20,
    right: 10,
  },
});

export default pickerSelectStyles;
