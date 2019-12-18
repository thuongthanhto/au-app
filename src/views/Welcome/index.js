import React from 'react';
import { View, Text } from 'react-native';

import { NavigationRoutes } from '../../navigator/Routes';

class WelcomeScreen extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => this.props.navigation.navigate(NavigationRoutes.EasyFirst)}>welcome screen</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
