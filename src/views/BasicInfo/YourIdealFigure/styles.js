import {StyleSheet} from 'react-native';

import {colors} from '../../../modules/colors';

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
  title: {
    color: '#ED1F24',
    fontSize: 32,
    fontWeight: 'bold',
  },
  textPragraph: {
    lineHeight: 24,
    fontSize: 16,
    paddingTop: 15,
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
  figure: {
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 46,
    marginTop: 15,
  },
});

export default styles;
