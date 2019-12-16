import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import styles from '../styles';
import { FILTER_TAB } from '../../../modules/utils/constants';

export const Filter = ({ taskRemain = 0, filterActive, onFilter }) => (
  <View style={styles.filterContainer}>
    <View style={styles.taskRemain}>
      <Text style={styles.remainText}>{`Task remain: ${taskRemain}`}</Text>
    </View>
    <View style={styles.filterItem}>
      <TouchableOpacity style={styles.borderFilter} onPress={() => onFilter(FILTER_TAB.TO_DO)}>
        <Text style={StyleSheet.flatten([styles.filterText, filterActive === FILTER_TAB.TO_DO && styles.filterActive])}>To do</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.borderFilter} onPress={() => onFilter(FILTER_TAB.IN_PROGRESS)}>
        <Text style={StyleSheet.flatten([styles.filterText, filterActive === FILTER_TAB.IN_PROGRESS && styles.filterActive])}>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onFilter(FILTER_TAB.COMPLETED)}>
        <Text style={StyleSheet.flatten([styles.filterText, filterActive === FILTER_TAB.COMPLETED && styles.filterActive])}>Completed</Text>
      </TouchableOpacity>
    </View>
  </View>
);