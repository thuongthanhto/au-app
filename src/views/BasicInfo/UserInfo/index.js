import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image
} from 'react-native';
import useForm from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';

import styles from '../styles';
import bgImg from '../assets/bg_main.jpg';
import Button from '../../../components/Button';
import {
  SexConfigs,
  generateAges,
  generateHeights,
  generateWeights,
  EalLevels,
  OalLevels,
} from './configs';
import { Images } from '../../../assets/images';
import { colors } from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';
import { NavigationRoutes } from '../../../navigator/Routes';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 15,
    right: 10,
  },
});

const UserInfoScreen = (props) => {
  const {register, setValue, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    console.log(data);
    props.navigation.navigate(NavigationRoutes.LegalStuff);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <ScrollView>
        <View style={styles.contentWrap}>
          <View style={styles.textContentWrap}>
            <Text style={styles.welcomeText}>{'It\'s this easy'}</Text>
            <Text style={styles.textPragraph}>
              {`Please enter some details about yourself. \nDoing this means when we're talking about kilojoules, we're talking about you.`}
            </Text>

            <View style={styles.formWrap}>
              <View style={styles.formItem}>
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
                {errors.sex && (
                  <Text style={styles.errorText}>Select your sex</Text>
                )}
              </View>
              <View style={styles.formItem}>
                <RNPickerSelect
                  items={generateAges()}
                  placeholder={{
                    label: 'Age',
                    value: null,
                  }}
                  onValueChange={text => setValue('age', text, true)}
                  ref={register({name: 'age'}, {required: true})}
                  useNativeAndroidPickerStyle={false}
                  style={pickerSelectStyles}
                  Icon={() => {
                    return <View style={styles.iconSelect} />;
                  }}
                />
                {errors.age && (
                  <Text style={styles.errorText}>Select your age</Text>
                )}
              </View>
              <View style={styles.formItem}>
                <RNPickerSelect
                  items={generateHeights()}
                  placeholder={{
                    label: 'Height',
                    value: null,
                  }}
                  onValueChange={text => setValue('height', text, true)}
                  ref={register({name: 'height'}, {required: true})}
                  useNativeAndroidPickerStyle={false}
                  style={pickerSelectStyles}
                  Icon={() => {
                    return <View style={styles.iconSelect} />;
                  }}
                />
                {errors.height && (
                  <Text style={styles.errorText}>Select your height</Text>
                )}
              </View>
              <View style={styles.formItem}>
                <RNPickerSelect
                  items={generateWeights()}
                  placeholder={{
                    label: 'Weight',
                    value: null,
                  }}
                  onValueChange={text => setValue('weight', text, true)}
                  ref={register({name: 'weight'}, {required: true})}
                  useNativeAndroidPickerStyle={false}
                  style={pickerSelectStyles}
                  Icon={() => {
                    return <View style={styles.iconSelect} />;
                  }}
                />
                {errors.weight && (
                  <Text style={styles.errorText}>Select your weight</Text>
                )}
              </View>
              <View style={styles.formItem}>
                <RNPickerSelect
                  items={OalLevels}
                  placeholder={{
                    label: 'Occupational activity',
                    value: null,
                  }}
                  onValueChange={text => setValue('weight', text, true)}
                  ref={register({name: 'weight'}, {required: true})}
                  useNativeAndroidPickerStyle={false}
                  style={pickerSelectStyles}
                  Icon={() => {
                    return <View style={styles.iconSelect} />;
                  }}
                />
                {errors.weight && (
                  <Text style={styles.errorText}>Select your weight</Text>
                )}
              </View>
              <View style={styles.formItem}>
                <RNPickerSelect
                  items={EalLevels}
                  placeholder={{
                    label: 'Non-occupational activity level',
                    value: null,
                  }}
                  onValueChange={text => setValue('weight', text, true)}
                  ref={register({name: 'weight'}, {required: true})}
                  useNativeAndroidPickerStyle={false}
                  style={pickerSelectStyles}
                  Icon={() => {
                    return <View style={styles.iconSelect} />;
                  }}
                />
                {errors.weight && (
                  <Text style={styles.errorText}>Select your weight</Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <ImageBackground source={bgImg} style={{width: '100%'}}>
        <View style={styles.containerButtonFlexRow}>
          <Button
            text="Skip"
            width={Responsive.h(65)}
            height={Responsive.v(25)}
            borderRadius={Responsive.h(12)}
            textStyle={{ color: colors.WHITE, fontSize: Responsive.h(12) }}
            color={[colors.SKIP_BUTTON, colors.SKIP_BUTTON, colors.SKIP_BUTTON]}
            style={{ justifyContent: 'center' }}
            onPress={() => props.navigation.navigate(NavigationRoutes.Home)}
          />
          <Button
            width="25%"
            height={Responsive.v(37)}
            text="Next"
            rightIcon={<Image source={Images.arrow_right} style={styles.largerArrowIcon} />}
            onPress={() => props.navigation.navigate(NavigationRoutes.LegalStuff)}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UserInfoScreen;
