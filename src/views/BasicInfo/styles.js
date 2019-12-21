import { StyleSheet, Dimensions } from 'react-native';

import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  homeContainer: {
    flex: 1,
    width,
    paddingHorizontal: Responsive.h(16)
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
  textContentWrap: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 55,
    paddingVertical: 24,
  },
  welcomeText: {
    color: '#ED1F24',
    fontSize: 48,
    fontWeight: 'bold',
  },
  textPragraph: {
    lineHeight: 24,
    fontSize: 16,
    paddingTop: 15,
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
  smallArrowIcon: {
    width: Responsive.h(7),
    height: Responsive.h(10)
  },
  largerArrowIcon: {
    width: Responsive.h(9),
    height: Responsive.h(14)
  },
  bigArrowIcon: {
    width: Responsive.h(11),
    height: Responsive.h(16)
  },
  homeBigLeftIcon: {
    width: Responsive.h(25),
    height: Responsive.h(25)
  },
  homeTitle: {
    width: '100%',
    height: Responsive.h(50)
  },
  homeImageFood: {
    width: '100%',
    height: '30%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  containerButton: {
    paddingHorizontal: Responsive.h(16),
    paddingVertical: Responsive.v(7)
  },
  containerButtonFlexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.h(16),
    paddingVertical: Responsive.v(7)
  },
  buttonText: {
    fontSize: 18,
    margin: 10,
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
    marginBottom: 20,
  },
  formItem: {
    marginTop: 10,
  },
  errorText: {
    color: '#D01C21',
    fontSize: 16,
  },
});

export default styles;
