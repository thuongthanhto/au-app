import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Alert} from 'react-native';
import useForm from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../styles';
import bgImg from '../assets/bg_main.jpg';
import Button from '../../../components/Button';
import {SexConfigs} from './configs';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 20,
    right: 10,
  },
});

const UserInfo = () => {
  const {register, setValue, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.contentWrap}>
        <View style={styles.textContentWrap}>
          <Text style={styles.welcomeText}>It's this easy</Text>
          <Text style={styles.textPragraph}>
            Please enter some details about yourself. Doing this means when
            we're talking about kilojoules, we're talking about you.
          </Text>
          <View>
            <RNPickerSelect
              items={SexConfigs}
              placeholder={{
                label: 'Sex',
                value: null,
              }}
              onValueChange={text => setValue('sex', text, true)}
              ref={register({name: 'sex'}, {required: true})}
              useNativeAndroidPickerStyle={false}
              style={pickerSelectStyles}
              Icon={() => {
                return <View style={styles.iconSelect} />;
              }}
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
        </View>
      </View>
      <View style={styles.footerWrap}>
        <ImageBackground source={bgImg} style={{width: '100%', height: '100%'}}>
          <View style={styles.containerButton}>
            <Button
              width={150}
              height={40}
              text="Continues"
              // loading={loading}
              // disabled={loading}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default UserInfo;
