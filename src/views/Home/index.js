import React from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import Toast, { DURATION } from 'react-native-easy-toast';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import { NavigationRoutes } from '../../navigator/Routes';
import { colors } from '../../modules/colors';
import ProfileItem from './Components/ProfileItem';
import { getAllUserRequest } from '../../actions/User';
import Responsive from '../../modules/utils/responsive';
import { saveData, getData } from '../../services/Storage';

class HomeScreen extends React.Component {

  static navigationOptions = () => ({
    title: 'List User',
    headerStyle: {
      backgroundColor: colors.MAIN_BACKGROUND,
      borderBottomWidth: 0,
      elevation: 0,
      height: Responsive.h(50),
    },
    headerTitleStyle: {
      color: colors.WHITE,
      fontSize: Responsive.h(18),
    },
  })
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllUserRequest(0.7);
  }

  handleSwipeRight = (value) => {
    const user = {
      ...value.user,
      uid: uuidv4()
    };
    getData(res => {
      saveData(res, user, () => this.showToast.show('added to favourite list', DURATION.LENGTH_SHORT));
    });
    this.props.getAllUserRequest(0.7);
  }

  handleSwipeLeft = () => {
    this.props.getAllUserRequest(0.7);
  }

  render() {
    const { listUser } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textDescription}>swipe right to add in favourite list</Text>
        <Text style={styles.textDescription}>swipe left I get the details of the next person</Text>
        <SwipeCards
          cards={listUser}
          loop
          renderCard={(item) => <ProfileItem userInfo={item.user} />}
          renderNoMoreCards={() => null}
          showYup={false}
          showNope={false}
          handleYup={this.handleSwipeRight}
          handleNope={this.handleSwipeLeft}
          cardRemoved={this.cardRemoved}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => this.props.navigation.navigate(NavigationRoutes.FavouriteUser)}
        >
          <Text style={styles.textButton}>Favourite User</Text>
        </TouchableOpacity>
        <Toast ref={(ref) => (this.showToast = ref)} position='top' style={{ backgroundColor: colors.MAIN_BACKGROUND}} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({UserReducer}) => ({
  listUser: UserReducer.listUser
});

const mapDispatchToProps = {
  getAllUserRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);