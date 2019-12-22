import React, {useReducer} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Text,
} from 'react-native';

import stylesBasicInfo from '../BasicInfo/styles';
import pickerSelectStyles from '../BasicInfo/pickerSelectStyles';
import {customReducer} from '../../modules/utils/helpers';
import {generateDurations, generateActivities} from './configs';
import {Images} from '../../assets/images';

const BurnkJScreen = () => {
  const initState = {
    activity: '',
    duration: '',
  };
  const [state, setState] = useReducer(customReducer, initState);
  return (
    <SafeAreaView style={stylesBasicInfo.container}>
      <View style={stylesBasicInfo.topWrap} />
      <ScrollView>
        <ImageBackground source={Images.bg_main} style={{width: '100%'}}>
          <View style={stylesBasicInfo.contentWrap}>
            <View style={stylesBasicInfo.textContentWrap}>
              <View style={stylesBasicInfo.formWrap}>
                <View style={stylesBasicInfo.formItem}>
                  <RNPickerSelect
                    value={state.activity}
                    items={generateActivities()}
                    placeholder={{
                      label: 'Activity',
                      value: null,
                    }}
                    // onValueChange={text => handleChange('sex', text)}
                    useNativeAndroidPickerStyle={false}
                    style={pickerSelectStyles}
                    Icon={() => {
                      return <View style={stylesBasicInfo.iconSelect} />;
                    }}
                  />
                </View>
                <View style={stylesBasicInfo.formItem}>
                  <RNPickerSelect
                    value={state.duration}
                    items={generateDurations()}
                    placeholder={{
                      label: 'Duration',
                      value: null,
                    }}
                    // onValueChange={text => handleChange('sex', text)}
                    useNativeAndroidPickerStyle={false}
                    style={pickerSelectStyles}
                    Icon={() => {
                      return <View style={stylesBasicInfo.iconSelect} />;
                    }}
                  />
                </View>
              </View>
              <Text style={stylesBasicInfo.h2}>
                What does this figure mean?
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BurnkJScreen;
