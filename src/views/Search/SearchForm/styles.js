import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.BLACK,
  },
  topWrap: {
    height: Responsive.v(7),
    backgroundColor: '#00AAEA',
  },
  body: {
    flex: 1,
    width,
    paddingVertical: Responsive.h(20),
    backgroundColor: colors.MAIN_BACKGROUND,
    paddingHorizontal: Responsive.h(16),
  },
  input: {
    height: Responsive.h(60),
    borderWidth: 1,
    borderColor: colors.BLACK,
    borderRadius: Responsive.h(4),
    backgroundColor: colors.WHITE,
    textAlign: 'left',
    fontSize: Responsive.h(35),
    fontFamily: 'PTSans-Bold',
  },
});

export default styles;
