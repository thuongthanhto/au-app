import React, {useState} from 'react';
import {View, SafeAreaView, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import {colors} from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';
import {toDP, convert} from '../../modules/utils/helpers';

const ConverterScreen = () => {
  const [calories, setCalories] = useState('1');
  const [kilojoules, setKilojoules] = useState('4.184');

  const handleChange = (name, value) => {
    if (name === 'calories') {
      const result = convert(value, 'Cal', 'kJ');
      setCalories(value);
      setKilojoules(result.toString());
    } else {
      const result = toDP(convert(value, 'kJ', 'Cal'), 0);
      setKilojoules(value);
      setCalories(result.toString());
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.body}>
        <Text style={styles.title}>Calories (Cal):</Text>
        <TextInput
          value={calories}
          style={styles.input}
          onChangeText={text => handleChange('calories', text)}
          keyboardType="numeric"
        />
        <View style={{alignItems: 'center'}}>
          <Icon name="equal" size={Responsive.h(50)} color={colors.RED} />
        </View>
        <Text style={styles.title}>Kilojoules (kJ):</Text>
        <TextInput
          value={kilojoules}
          style={styles.input}
          onChangeText={text => handleChange('kilojoules', text)}
          keyboardType="numeric"
        />
        <Text style={styles.description}>
          Enter a number in Calories or Kilojoules to see the equivalent value
        </Text>
        <Text style={styles.description}>1 calorie = 4.184 kilojoules</Text>
      </View>
    </SafeAreaView>
  );
};

export default ConverterScreen;
