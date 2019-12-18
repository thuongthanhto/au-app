import React from 'react';
import { View, Text } from 'react-native';

import { NavigationRoutes } from '../../navigator/Routes';

class EasyFirstScreen extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => this.props.navigation.navigate(NavigationRoutes.Home)}>Easy First screen</Text>
      </View>
    );
  }
}

export default EasyFirstScreen;
