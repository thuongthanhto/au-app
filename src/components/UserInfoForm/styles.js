import {StyleSheet} from 'react-native';
import Responsive from '../../modules/utils/responsive';

export const styles = StyleSheet.create({
  form: {
    marginBottom: Responsive.v(20),
  },
  formItem: {
    marginTop: Responsive.v(10),
  },
  iconSelect: {
    backgroundColor: 'transparent',
    borderTopWidth: 10,
    borderTopColor: 'gray',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
  },
  errorText: {
    color: '#D01C21',
    fontSize: Responsive.v(16),
    fontFamily: 'PTSans-Regular',
  },
  tooltipPragraph: {
    marginTop: Responsive.h(12),
    fontSize: Responsive.h(14),
    fontFamily: 'PTSans-Regular',
    lineHeight: Responsive.h(14),
  },
  h3: {
    fontSize: Responsive.h(20),
    fontFamily: 'PTSans-Regular',
    marginTop: Responsive.h(15),
  },
});

export const pickerSelectStyles = StyleSheet.create({
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
  },
  iconContainer: {
    top: 20,
    right: 10,
  },
});
