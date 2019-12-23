import React from 'react';
import { View, SafeAreaView, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

const ConverterScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.body}>
        <Text style={styles.title}>Calories (Cal):</Text>
        <TextInput
          value="1"
          style={styles.input}
          onChangeText={() => {}}
          keyboardType="numeric"
        />
        <View style={{ alignItems: 'center' }}>
          <Icon name="equal" size={Responsive.h(50)} color={colors.RED} />
        </View>
        <Text style={styles.title}>Kilojoules (kJ):</Text>
        <TextInput
          value="4.184"
          style={styles.input}
          onChangeText={() => {}}
          keyboardType="numeric"
        />
        <Text style={styles.description}>Enter a number in Calories or Kilojoules to see the equivalent value</Text>
        <Text style={styles.description}>1 Calories = 4.184 kilojoules</Text>
      </View>
    </SafeAreaView>
  );
};

export default ConverterScreen;
