import {StyleSheet, Dimensions} from 'react-native';

import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerWithColor: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.MAIN_BACKGROUND,
  },
  homeContainer: {
    flex: 1,
    width,
  },
  homeBody: {
    flex: 1,
    width,
    paddingHorizontal: Responsive.h(16),
    backgroundColor: colors.MAIN_BACKGROUND,
  },
  mainBody: {
    flex: 1,
    width,
    paddingHorizontal: Responsive.h(40),
    backgroundColor: colors.MAIN_BACKGROUND,
    minHeight: height,
  },
  topWrap: {
    height: Responsive.v(7),
    backgroundColor: '#00AAEA',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.WHITE,
  },
  contentWrapHome: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.MAIN_BACKGROUND,
  },
  contentWrap: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: Responsive.h(40),
    paddingVertical: Responsive.v(20),
  },
  welcomeText: {
    color: '#ED1F24',
    fontSize: Responsive.h(40),
    fontFamily: 'PTSans-Bold',
  },
  title: {
    color: '#ED1F24',
    fontSize: Responsive.h(40),
    fontFamily: 'PTSans-Bold',
  },
  textPragraph: {
    lineHeight: Responsive.h(24),
    fontSize: Responsive.h(16),
    fontFamily: 'PTSans-Regular',
    paddingTop: Responsive.v(15),
    color: '#3B3B3B',
  },
  textPragraphFake: {
    lineHeight: Responsive.h(24),
    fontSize: Responsive.h(16),
    fontFamily: 'PTSans-Regular',
    color: '#3B3B3B',
  },
  textPragraphLink: {
    lineHeight: Responsive.h(24),
    fontSize: Responsive.v(16),
    fontFamily: 'PTSans-Regular',
  },
  imageWrap: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  smallArrowIcon: {
    width: Responsive.h(7),
    height: Responsive.h(10),
  },
  largerArrowIcon: {
    width: Responsive.h(9),
    height: Responsive.h(14),
  },
  bigArrowIcon: {
    width: Responsive.h(11),
    height: Responsive.h(16),
  },
  homeBigLeftIcon: {
    width: Responsive.h(25),
    height: Responsive.h(25),
  },
  homeTitle: {
    width: '100%',
    height: Responsive.h(50),
  },
  homeImageFood: {
    width: '100%',
    height: '30%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: Responsive.v(15),
    paddingRight: Responsive.v(15),
    borderRadius: Responsive.v(5),
  },
  containerButton: {
    paddingHorizontal: Responsive.h(16),
    paddingVertical: Responsive.v(7),
  },
  containerButtonFlexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.h(18),
    paddingVertical: Responsive.h(10),
  },
  buttonText: {
    fontSize: Responsive.v(18),
    fontFamily: 'PTSans-Regular',
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
    fontFamily: 'PTSans-Regular',
  },
  inputInfo: {
    flex: 1,
  },
  linkWrap: {
    marginTop: Responsive.v(10),
  },
  tooltipPragraph: {
    marginTop: Responsive.h(12),
    fontSize: Responsive.h(16),
    fontFamily: 'PTSans-Regular',
    lineHeight: Responsive.h(14),
  },
  h3: {
    fontSize: Responsive.h(20),
    fontFamily: 'PTSans-Regular',
    marginTop: Responsive.h(15),
  },
  h2: {
    fontSize: Responsive.h(18),
    marginTop: Responsive.h(15),
    fontWeight: 'bold',
  },
  figure: {
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    fontFamily: 'PTSans-Bold',
    textAlign: 'center',
    fontSize: Responsive.h(46),
    marginTop: Responsive.v(15),
  },
  figureRange: {
    color: '#70706E',
    fontSize: Responsive.h(16),
    fontFamily: 'PTSans-Regular',
    textAlign: 'center',
    paddingVertical: Responsive.v(2),
    marginBottom: Responsive.v(1),
  },
});

export default styles;
