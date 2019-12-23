import {StyleSheet, Dimensions} from 'react-native';
import Responsive from '../../../modules/utils/responsive';

const styles = StyleSheet.create({
  title: {
    color: '#ED1F24',
    fontSize: Responsive.h(40),
    fontFamily: 'PTSans-Bold',
    marginTop: Responsive.v(20),
  },
});

export default styles;
