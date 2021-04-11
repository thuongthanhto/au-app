import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

import AppNavigator from './src/navigator/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

class RootContainer extends React.PureComponent {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#00AAEA" />
        <AppNavigator />
      </View>
    );
  }
}

export default RootContainer;
