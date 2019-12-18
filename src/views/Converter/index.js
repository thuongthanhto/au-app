import React from 'react';
import { View, Text } from 'react-native';

class ConverterScreen extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => this.props.navigation.goBack()}>Converter screen</Text>
      </View>
    );
  }
}

export default ConverterScreen;
