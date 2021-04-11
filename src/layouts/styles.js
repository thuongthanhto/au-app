import {StyleSheet} from 'react-native';
import Responsive from '../modules/utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topHeader: {
    height: Responsive.v(7),
    backgroundColor: '#00AAEA',
  },
});

export default styles;
