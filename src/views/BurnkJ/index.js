import React, {useReducer, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';

import stylesBasicInfo from '../BasicInfo/styles';
import pickerSelectStyles from '../BasicInfo/pickerSelectStyles';
import {customReducer, calculateBurn} from '../../modules/utils/helpers';
import {generateDurations, generateActivities} from './configs';
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
    const energyUse = calculateBurn(value, duration, profile);
    const resultText = `You would use around ${energyUse} kJ from "${value}" for ${duration} min(s).`;
    setState({resultText, energyUseText: `${energyUse} kJ`, energyUse});
  };

  const handleChangeDuration = value => {
    setDuration(value);
    const energyUse = calculateBurn(activity, value, profile);
    const resultText = `You would use around ${energyUse} kJ from "${activity}" for ${value} min(s).`;
    setState({resultText, energyUseText: `${energyUse} kJ`, energyUse});
  };

  return (
    <SafeAreaView style={stylesBasicInfo.container}>
      <View style={stylesBasicInfo.topWrap} />
      <ScrollView style={stylesBasicInfo.mainBody}>
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
              Choose an activity and the duration to find out how much energy
              you need to complete it.
            </Text>
            <Text style={stylesBasicInfo.textPragraph}>
              The result is based on your profile information and can help you
              understand your nutrition needs depending on your activity levels.
            </Text>
          </>
        )}
        {state.energyUse !== '' && duration !== '' && (
          <>
            <Text style={stylesBasicInfo.figure}>{state.energyUseText}</Text>
            <Text style={stylesBasicInfo.h2}>What does this number mean?</Text>
            <Text style={stylesBasicInfo.textPragraph}>{state.resultText}</Text>
            <Text style={stylesBasicInfo.textPragraph}>
              This number should approximately how much energy your body would
              use based on the activity you selected and the length of time you
              do that activity for.
            </Text>
            <Text style={stylesBasicInfo.textPragraph}>
              Always exercise within your fitness limits. Constult a doctor
              before exewrcising if you are unsure.
            </Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BurnkJScreen;
