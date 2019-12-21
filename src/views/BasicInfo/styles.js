import {StyleSheet} from 'react-native';

import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topWrap: {
    height: Responsive.v(7),
    backgroundColor: '#00AAEA',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.WHITE,
  },
  footerWrap: {
    height: Responsive.v(112),
  },
  textContentWrap: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: Responsive.h(55),
    paddingVertical: Responsive.v(24),
  },
  welcomeText: {
    color: '#ED1F24',
    fontSize: Responsive.v(48),
    fontWeight: 'bold',
  },
  textPragraph: {
    lineHeight: Responsive.h(24),
    fontSize: Responsive.v(16),
    paddingTop: Responsive.v(15),
  },
  textPragraphLink: {
    lineHeight: Responsive.h(24),
    fontSize: Responsive.v(16),
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
    paddingLeft: Responsive.v(15),
    paddingRight: Responsive.v(15),
    borderRadius: Responsive.v(5),
  },
  containerButton: {
    paddingHorizontal: Responsive.h(32),
    paddingVertical: Responsive.v(16),
  },
  buttonText: {
    fontSize: Responsive.v(18),
    margin: Responsive.h(10),
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
  formWrap: {
    marginBottom: Responsive.v(20),
  },
  formItem: {
    marginTop: Responsive.v(10),
  },
  errorText: {
    color: '#D01C21',
    fontSize: Responsive.v(16),
  },
  inputInfo: {
    flex: 1,
  },
  linkWrap: {
    marginTop: Responsive.v(10),
  },
});

export default styles;
