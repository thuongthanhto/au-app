import {StyleSheet} from 'react-native';
import Responsive from '../../../modules/utils/responsive';

const styles = StyleSheet.create({
  title: {
    color: '#ED1F24',
    fontSize: Responsive.h(40),
    fontFamily: 'PTSans-Bold',
    marginTop: Responsive.v(20),
  },
  imageWrap: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
  },
});

export default styles;
