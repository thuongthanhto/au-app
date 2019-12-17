import {StyleSheet, Dimensions} from 'react-native';

import Responsive from '../../../modules/utils/responsive';
import {colors} from '../../../modules/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topWrap: {
    height: 7,
    backgroundColor: '#00AAEA',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.WHITE,
  },
  footerWrap: {
    height: 112,
  },
  textContentWrap: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 55,
    paddingVertical: 24,
  },
  welcomeText: {
    color: '#ED1F24',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textPragraph: {
    lineHeight: 24,
    fontSize: 18,
  },
  imageContentWrap: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  containerButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 18,
    margin: 10,
  },
});

export default styles;
