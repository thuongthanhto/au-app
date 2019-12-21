import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import useForm from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';

import {useDispatch} from 'react-redux';
import styles from '../styles';
import Button from '../../../components/Button';
import {
  SexConfigs,
  generateAges,
  generateHeights,
  generateWeights,
  EalLevels,
  OalLevels,
} from './configs';
import {NavigationRoutes} from '../../../navigator/Routes';
import {Images} from '../../../assets/images';
import Responsive from '../../../modules/utils/responsive';
import {
  checkActivityVisibility,
  updateProfileCalculations,
} from '../../../modules/utils/helpers';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    fontSize: Responsive.v(16),
    paddingVertical: Responsive.v(8),
    paddingHorizontal: Responsive.h(8),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: Responsive.v(4),
    color: 'black',
    paddingRight: Responsive.v(30), // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: '100%',
    fontSize: Responsive.v(16),
    paddingHorizontal: Responsive.h(8),
    paddingVertical: Responsive.v(4),
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: Responsive.v(8),
    color: 'black',
    paddingRight: Responsive.v(30), // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 15,
    right: 10,
  },
});

const UserInfoScreen = props => {
  const profile = {
    sex: '',
    age: 0,
    height: 0,
    weight: 0,
    oal_level: '',
    eal_level: '',
    BMR: {
      current: {},
      goal: {},
    },
    weight_goal: 1,
  };
  const [age, setAge] = useState('');
  const dispatch = useDispatch();
  const {register, setValue, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    let activeProfile = {
      ...profile,
      ...data,
      weight_goal: data.age < 18 ? 1 : null,
    };
    activeProfile = updateProfileCalculations(activeProfile);
    dispatch({type: 'SAVE_PROFILE', payload: activeProfile});
    console.log(activeProfile);
    props.navigation.navigate(NavigationRoutes.YourIdealFigure);
  };
  const handleAgeChange = text => {
    setValue('age', text, true);
    setAge(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <ScrollView>
        <View style={styles.contentWrap}>
          <View style={styles.textContentWrap}>
            <Text style={styles.welcomeText}>It's this easy</Text>
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
                  onValueChange={text => handleAgeChange(text)}
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
              {checkActivityVisibility(age) && (
                <>
                  <View style={styles.formItem}>
                    <View style={styles.inputInfo}>
                      <RNPickerSelect
                        items={OalLevels}
                        placeholder={{
                          label: 'Occupational activity',
                          value: null,
                        }}
                        onValueChange={text =>
                          setValue('oal_level', text, true)
                        }
                        ref={register(
                          {name: 'oal_level'},
                          {required: checkActivityVisibility(age)},
                        )}
                        useNativeAndroidPickerStyle={false}
                        style={pickerSelectStyles}
                        Icon={() => {
                          return <View style={styles.iconSelect} />;
                        }}
                      />
                      <View style={{position: 'absolute', left: '102%'}}>
                        <Image source={Images.info} />
                      </View>
                    </View>

                    {errors.oal_level && (
                      <Text style={styles.errorText}>Please choose one</Text>
                    )}
                  </View>
                  <View style={styles.formItem}>
                    <View style={styles.inputInfo}>
                      <RNPickerSelect
                        items={EalLevels}
                        placeholder={{
                          label: 'Non-occupational activity level',
                          value: null,
                        }}
                        onValueChange={text =>
                          setValue('eal_level', text, true)
                        }
                        ref={register(
                          {name: 'eal_level'},
                          {required: checkActivityVisibility(age)},
                        )}
                        useNativeAndroidPickerStyle={false}
                        style={pickerSelectStyles}
                        Icon={() => {
                          return <View style={styles.iconSelect} />;
                        }}
                      />

                      <View style={{position: 'absolute', left: '102%'}}>
                        <Image source={Images.info} />
                      </View>
                    </View>

                    {errors.eal_level && (
                      <Text style={styles.errorText}>Please choose one</Text>
                    )}
                  </View>
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerWrap}>
        <ImageBackground
          source={Images.bg_main}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.containerButton}>
            <Button
              width={150}
              height={40}
              text="Continues"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default UserInfoScreen;
