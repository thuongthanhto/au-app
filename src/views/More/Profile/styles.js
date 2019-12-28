import {StyleSheet, Dimensions} from 'react-native';
import Responsive from '../../../modules/utils/responsive';
import {colors} from '../../../modules/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width,
    paddingHorizontal: Responsive.h(40),
    paddingVertical: Responsive.v(20),
    backgroundColor: colors.MAIN_BACKGROUND,
  },
  title: {
    fontSize: Responsive.h(20),
    fontFamily: 'PTSans-Regular',
  },
  formItem: {
    marginTop: Responsive.v(10),
  },
  errorText: {
    color: '#D01C21',
    fontSize: Responsive.v(16),
    fontFamily: 'PTSans-Regular',
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
});

export default styles;
