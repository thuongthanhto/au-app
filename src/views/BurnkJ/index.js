import React, {useReducer, useEffect, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';

import stylesBasicInfo from '../BasicInfo/styles';
import pickerSelectStyles from '../BasicInfo/pickerSelectStyles';
import {customReducer, calculateBurn} from '../../modules/utils/helpers';
import {generateDurations, generateActivities} from './configs';
import {Images} from '../../assets/images';
import {getProfileSelector} from '../../selectors/homeSelector';

const BurnkJScreen = () => {
  const profile = useSelector(state => getProfileSelector(state));

  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const initState = {
    showResult: false,
    resultText: '',
    energyUseText: '',
    energyUse: '',
  };
  const [state, setState] = useReducer(customReducer, initState);

  const handleChangeActivity = value => {
    setActivity(value);
    console.log(value);
    const energyUse = calculateBurn(value, duration, profile);
    const resultText = `You'd burn ${energyUse}  kJ from "${activity}" for ${duration}`;
    setState({resultText, energyUseText: `${energyUse} kJ`, energyUse});
  };

  const handleChangeDuration = value => {
    setDuration(value);
    const energyUse = calculateBurn(activity, value, profile);
    const resultText = `You'd burn ${energyUse}  kJ from "${activity}" for ${duration}`;
    setState({resultText, energyUseText: `${energyUse} kJ`, energyUse});
  };

  return (
    <SafeAreaView style={stylesBasicInfo.container}>
      <View style={stylesBasicInfo.topWrap} />
      <ScrollView>
        <View style={stylesBasicInfo.mainBody}>
          <View>
            <View style={stylesBasicInfo.formItem}>
              <RNPickerSelect
                value={activity}
                items={generateActivities()}
                placeholder={{
                  label: 'Activity',
                  value: '',
                }}
                onValueChange={text => handleChangeActivity(text)}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                Icon={() => {
                  return <View style={stylesBasicInfo.iconSelect} />;
                }}
              />
            </View>
            <View style={stylesBasicInfo.formItem}>
              <RNPickerSelect
                value={duration}
                items={generateDurations()}
                placeholder={{
                  label: 'Duration',
                  value: '',
                }}
                onValueChange={text => handleChangeDuration(text)}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                Icon={() => {
                  return <View style={stylesBasicInfo.iconSelect} />;
                }}
              />
            </View>
          </View>
          {(activity === '' || duration === '') && (
            <>
              <Text style={stylesBasicInfo.textPragraph}>
                Select an activity and the duration to find out how many kJs you
                will burn. The result is based on your current profile.
              </Text>
              <Text style={stylesBasicInfo.textPragraph}>
                The results will tell you how much fuel you need for specific
                physical activities. They're worth remembering when you are
                balancing how many kJs you consume through food and drinks.
              </Text>
            </>
          )}
          {state.energyUse !== '' && duration !== '' && (
            <>
              <Text style={stylesBasicInfo.figure}>{state.energyUseText}</Text>
              <Text style={stylesBasicInfo.h2}>
                What does this figure mean?
              </Text>
              <Text style={stylesBasicInfo.textPragraph}>
                {state.resultText}
              </Text>
              <Text style={stylesBasicInfo.textPragraph}>
                This figure shows you how many kJs your body will burn based on
                your selection of activity and the duration that you do that
                activity for.
              </Text>
              <Text style={stylesBasicInfo.textPragraph}>
                Always exercise within the limits of your level of fitness.
                Consult a doctor before exercising if unsure.
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BurnkJScreen;
