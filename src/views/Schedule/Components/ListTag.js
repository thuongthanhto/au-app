import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../styles';
import { colors } from '../../../modules/colors';

export const ListTag = ({ list, onPressTag }) => (
  <View style={styles.listTagContainer}>
    {list.map(item => (
      <TouchableOpacity onPress={() => onPressTag([{...item, isSelect: !item.isSelect}])} key={item.tagId}>
        <Ionicons
          size={30}
          color={colors[item.color.toUpperCase()]}
          name={item.isSelect ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'}
        />
        <Text style={{ color: colors[item.color.toUpperCase()]}}>{item.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);