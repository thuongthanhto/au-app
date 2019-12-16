import React from 'react';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from '../styles';
import { colors } from '../../../modules/colors';
import { USER_INFO } from '../../../modules/utils/constants';

export default class ProfileItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      active: 'name',
      index: 0
    };
  }

  onSelectItem = (item, index) => {
    this.setState({ active: item.key, index });
  }

  checkActiveItem = (key) => key === this.state.active;

  renderIconItem = (item, index) => (
    <TouchableOpacity key={item.key} style={[styles.icon, this.checkActiveItem(item.key) && styles.borderTop]} onPress={() => this.onSelectItem(item, index)}>
      <Feather name={item.icon} size={30} color={this.checkActiveItem(item.key) ? colors.ACTIVE : colors.PLACE_HOLDER} />
    </TouchableOpacity>
  );

  getValue = (userInfo, key) => {
    if (key === 'name') {
      return `${userInfo[key].title}. ${userInfo[key].first} ${userInfo[key].last}`;
    }
    if (key === 'location') {
      return `${userInfo[key].street} ${userInfo[key].city} ${userInfo[key].state}`;
    }
    if (key === 'dob') {
      return moment(userInfo[key] * 1000).format('MM-DD-YYYY');
    }
    return userInfo[key];
  }

  render() {
    const { index } = this.state;
    const { userInfo } = this.props;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.header} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.title}>{USER_INFO[index].title}</Text>
            <Text style={styles.userInfo}>{this.getValue(userInfo, USER_INFO[index].key)}</Text>
            <View style={styles.listIcon}>
              {USER_INFO.map(this.renderIconItem)}
            </View>
          </View>
        </View>
        <Image
          style={styles.avatar}
          source={{uri: userInfo.picture.thumbnail}}
        />
      </View>
    );
  }
}
