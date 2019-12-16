import React from 'react';
import moment from 'moment';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { SafeAreaView, TouchableOpacity, Text, FlatList, View, Image } from 'react-native';

import styles from './styles';
import { colors } from '../../modules/colors';
import { getData } from '../../services/Storage';
import Responsive from '../../modules/utils/responsive';

class FavouriteUserScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'My Favourite',
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
    headerLeft: (
      <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.goBack(null)}>
        <FeatherIcons name="chevron-left" size={25} color={colors.WHITE} />
      </TouchableOpacity>
		)
  })
  
  constructor(props) {
    super(props);
    this.state = {
      listUser: []
    };
  }

  componentDidMount() {
    getData(res => {
      this.setState({ listUser: res });
    });
  }

  renderInfoItem = (icon, value) => (
    <View style={styles.infoItem}>
      <FeatherIcons name={icon} size={20} color={colors.PLACE_HOLDER} />
      <Text style={styles.infoContent}>{value}</Text>
    </View>
  )

  renderItem = ({ item }) => (
    <View style={styles.favouriteItemContainer} key={item.uid}>
      <Image
        style={styles.avatarFavourite}
        source={{uri: item.picture.thumbnail}}
      />
      <Text style={styles.fullName}>{`${item.name.title}. ${item.name.first} ${item.name.last}`}</Text>
      {this.renderInfoItem('calendar', moment(item.dob * 1000).format('MM-DD-YYYY'))}
      {this.renderInfoItem('map', `${item.location.street} ${item.location.city} ${item.location.state}`)}
      {this.renderInfoItem('phone', item.phone)}
      {this.renderInfoItem('lock', item.password)}
    </View>
  );

  render() {
    const { listUser } = this.state;
      return (
      <SafeAreaView style={styles.container}>
        {listUser.length > 0 ? (
          <FlatList
            data={listUser}
            renderItem={this.renderItem}
            keyExtractor={item => item.uid}
            showsVerticalScrollIndicator={false}
          />
        ) : <Text>There are no users in the favourite list</Text>}
      </SafeAreaView>
      );
  }
}

export default FavouriteUserScreen;