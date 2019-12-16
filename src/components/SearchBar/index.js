import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const SearchBar =  ({ style, wrapperStyle, ...other}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, wrapperStyle])}>
      <View style={styles.content}>
        <FontAwesome style={styles.icon} name="search" />
        <TextInput
          style={[styles.input, style]}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          returnKeyType="search"
          {...other}
        />
      </View>
    </View>
  );
};

export default SearchBar;