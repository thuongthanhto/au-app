import React, {useReducer, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import commonStyle from '../styles';
import styles from './styles';
import {
  SexConfigs,
  EalLevels,
  OalLevels,
  generateWeights,
  generateHeights,
  generateAges,
} from '../../BasicInfo/UserInfo/configs';
import pickerSelectStyles from '../../BasicInfo/pickerSelectStyles';
import {
  customReducer,
  updateProfileCalculations,
  checkActivityVisibility,
} from '../../../modules/utils/helpers';
import {getProfileSelector} from '../../../selectors/homeSelector';
import {NavigationRoutes} from '../../../navigator/Routes';
import {DEFAULT_PROFILE} from '../../../modules/utils/constants';
import Button from '../../../components/Button';
import Responsive from '../../../modules/utils/responsive';

const ProfileScreen = props => {
  const oldProfile = useSelector(state => getProfileSelector(state));
  const initState = {
    sex: oldProfile.sex || '',
    age: oldProfile.age || '',
    height: oldProfile.height || '',
    weight: oldProfile.weight || '',
    oal_level: oldProfile.oal_level || '',
    eal_level: oldProfile.eal_level || '',
  };
  const [dirty, setDirty] = useState(false);
  const [state, setState] = useReducer(customReducer, initState);

  const dispatch = useDispatch();

  const checkValidate = () => {
    if (!state.age) {
      return false;
    }
    // eslint-disable-next-line radix
    if (parseInt(state.age) < 10) {
      if (!state.sex || !state.age || !state.height || !state.weight) {
        return false;
      }

      return true;
    }
    if (
      !state.sex ||
      !state.age ||
      !state.height ||
      !state.weight ||
      !state.oal_level ||
      !state.eal_level
    ) {
      return false;
    }

    return true;
  };

  const handleChange = (name, value) => {
    setState({[name]: value});
  };

  const handleSubmit = () => {
    setDirty(true);

    if (checkValidate() === true) {
      let activeProfile = {
        ...DEFAULT_PROFILE,
        ...state,
        weight_goal: state.age < 18 ? 1 : null,
      };
      activeProfile = updateProfileCalculations(activeProfile);
      dispatch({type: 'SAVE_PROFILE', payload: activeProfile});

      if (state.age < 18) {
        props.navigation.navigate(NavigationRoutes.YourIdealFigure);
      } else {
        props.navigation.navigate(NavigationRoutes.WeightGoal);
      }
    }
  };
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.topWrap} />
      <View style={styles.body}>
        <Text style={styles.title}>Your saved profile</Text>
        <View style={styles.formItem}>
          <RNPickerSelect
            value={state.sex}
            items={SexConfigs}
            placeholder={{
              label: 'Sex',
              value: null,
            }}
            onValueChange={text => handleChange('sex', text)}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            Icon={() => {
              return <View style={styles.iconSelect} />;
            }}
          />
          {dirty && !state.sex && (
            <Text style={styles.errorText}>Select your sex</Text>
          )}
        </View>
        <View style={styles.formItem}>
          <RNPickerSelect
            value={state.age}
            items={generateAges()}
            placeholder={{
              label: 'Age',
              value: null,
            }}
            onValueChange={text => handleChange('age', text)}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            Icon={() => {
              return <View style={styles.iconSelect} />;
            }}
          />
          {dirty && !state.age && (
            <Text style={styles.errorText}>Select your age</Text>
          )}
        </View>
        <View style={styles.formItem}>
          <RNPickerSelect
            value={state.height}
            items={generateHeights()}
            placeholder={{
              label: 'Height',
              value: null,
            }}
            onValueChange={text => handleChange('height', text)}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            Icon={() => {
              return <View style={styles.iconSelect} />;
            }}
          />
          {dirty && !state.height && (
            <Text style={styles.errorText}>Select your height</Text>
          )}
        </View>
        <View style={styles.formItem}>
          <RNPickerSelect
            value={state.weight}
            items={generateWeights()}
            placeholder={{
              label: 'Weight',
              value: null,
            }}
            onValueChange={text => handleChange('weight', text)}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            Icon={() => {
              return <View style={styles.iconSelect} />;
            }}
          />
          {dirty && !state.weight && (
            <Text style={styles.errorText}>Select your weight</Text>
          )}
        </View>
        {checkActivityVisibility(state.age) && (
          <>
            <View style={styles.formItem}>
              <RNPickerSelect
                value={state.oal_level}
                items={OalLevels}
                placeholder={{
                  label: 'Occupational activity',
                  value: null,
                }}
                onValueChange={text => handleChange('oal_level', text)}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                Icon={() => {
                  return <View style={styles.iconSelect} />;
                }}
              />

              {dirty && !state.oal_level && (
                <Text style={styles.errorText}>Please choose one</Text>
              )}
            </View>
            <View style={styles.formItem}>
              <RNPickerSelect
                value={state.eal_level}
                items={EalLevels}
                placeholder={{
                  label: 'Non-occupational activity level',
                  value: null,
                }}
                onValueChange={text => handleChange('eal_level', text)}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                Icon={() => {
                  return <View style={styles.iconSelect} />;
                }}
              />
              {dirty && !state.eal_level && (
                <Text style={styles.errorText}>Please choose one</Text>
              )}
            </View>
          </>
        )}
        <View style={{...styles.formItem, marginTop: Responsive.v(30)}}>
          <Button
            width="100%"
            height={Responsive.h(35)}
            borderRadius={Responsive.h(14)}
            text="Save"
            style={{justifyContent: 'center'}}
            textStyle={{alignItems: 'center'}}
            onPress={() => handleSubmit()}
          />
        </View>
        <View style={styles.formItem}>
          <Button
            width="100%"
            height={Responsive.h(35)}
            borderRadius={Responsive.h(14)}
            text="Clear"
            style={{justifyContent: 'center'}}
            textStyle={{alignItems: 'center'}}
            onPress={() => handleSubmit()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
