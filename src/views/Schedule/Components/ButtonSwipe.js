import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles';

export const ButtonSwipe = ({ Icon, onPress, text, disabled }) => (
  <TouchableOpacity style={styles.swipeContainer} onPress={onPress} disabled={disabled}>
      <View style={{height: 30}}>
        {Icon}
      </View>
      {!!text && <Text style={styles.textSwipeBtn}>{text}</Text>}
  </TouchableOpacity>
);