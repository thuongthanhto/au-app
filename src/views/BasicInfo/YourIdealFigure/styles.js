import {StyleSheet} from 'react-native';

import {colors} from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';

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
  textContentWrap: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: Responsive.h(40),
    paddingVertical: Responsive.v(24),
  },
  title: {
    color: '#ED1F24',
    fontSize: Responsive.h(40),
    fontWeight: 'bold',
  },
  textPragraph: {
    lineHeight: Responsive.h(24),
    fontSize: Responsive.h(16),
    paddingTop: Responsive.v(15),
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
  figure: {
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Responsive.h(46),
    marginTop: Responsive.v(15),
  },
  containerButtonFlexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.h(16),
    paddingVertical: Responsive.v(7),
  },
  figureRange: {
    backgroundColor: '#FFF',
    color: '#70706E',
    fontSize: Responsive.h(16),
    textAlign: 'center',
    paddingVertical: Responsive.v(2),
    marginBottom: Responsive.v(1),
  },
});

export default styles;
