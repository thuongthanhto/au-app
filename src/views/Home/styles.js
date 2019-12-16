import { StyleSheet, Dimensions } from 'react-native';

import Responsive from '../../modules/utils/responsive';
import { colors } from '../../modules/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.LIGHT_GRAY,
  },
  headerLeft: {
    paddingLeft:  Responsive.h(15),
    alignItems: 'center'
  },
  cardContainer: {
    height: width,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    width: width - Responsive.h(30),
    borderRadius: 5,
    marginTop: Responsive.v(15)
  },
  button: {
    padding: 10,
    width: Responsive.v(100),
    borderRadius: 5,
    backgroundColor: colors.MAIN_BACKGROUND
  },
  textButton: {
    textAlign: 'center',
    color: colors.WHITE
  },
  textDescription: {
    textAlign: 'center',
    paddingTop: 20
  },

  // Component
  itemContainer: {
    width: width - 30,
    height: width - 30
  },
  header:{
    backgroundColor: colors.GRAY_SHADE,
    height: Responsive.h(130),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomColor: colors.BLACK,
    borderBottomWidth: 0.5
  },
  avatar: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.8,
    borderWidth: Responsive.h(4),
    borderColor: colors.WHITE,
    marginBottom: Responsive.v(10),
    alignSelf: 'center',
    position: 'absolute',
    marginTop: Responsive.v(30),
  },
  body:{
    backgroundColor: colors.WHITE
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: Responsive.h(30),
    paddingTop: Responsive.h(80),
    width: width - Responsive.h(30),
    backgroundColor: colors.WHITE,
    position: 'absolute'
  },
  title:{
    fontSize: Responsive.h(18),
    color: colors.PLACE_HOLDER,
    fontWeight: "600",
    textAlign: 'center'
  },
  userInfo:{
    fontSize: Responsive.h(28),
    fontWeight: "600",
    textAlign: 'center'
  },
  listIcon: {
    flexDirection: 'row',
    paddingTop: Responsive.v(30),
  },
  icon: {
    paddingHorizontal: Responsive.h(10),
    paddingTop: Responsive.v(5),
  },
  borderTop: {
    borderTopWidth: 2,
    borderTopColor: colors.ACTIVE
  },
  favouriteItemContainer: {
    width: width - 30,
    backgroundColor: colors.WHITE,
    borderRadius: Responsive.h(10),
    paddingBottom: Responsive.h(20),
    marginVertical: Responsive.h(5),
  },
  avatarFavourite: {
    width: width - 30,
    height: width - 30,
    borderRadius: Responsive.h(10),
  },
  fullName: {
    fontSize: Responsive.h(20),
    fontWeight: 'bold',
    padding: Responsive.h(15),
    color: colors.BLACK
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Responsive.h(15),
    paddingVertical: Responsive.h(5)
  },
  infoContent: {
    color: colors.PLACE_HOLDER,
    paddingLeft: Responsive.h(15)
  }
});

export default styles;