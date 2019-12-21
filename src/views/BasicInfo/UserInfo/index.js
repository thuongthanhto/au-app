import React, {useReducer, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity as Touch
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch, useSelector} from 'react-redux';

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
import {colors} from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';
import {NavigationRoutes} from '../../../navigator/Routes';
import {Images} from '../../../assets/images';
import {
  checkActivityVisibility,
  updateProfileCalculations,
  customReducer,
} from '../../../modules/utils/helpers';
import {getProfileSelector} from '../../../selectors/homeSelector';
import {DEFAULT_PROFILE} from '../../../modules/utils/constants';
import pickerSelectStyles from '../pickerSelectStyles';
import { Tooltip } from '../../../components/Tooltip';

const UserInfoScreen = props => {
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
  const [tooltipVisible, setTooltipVisible] = useState('');
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

  const renderTooltipNonOccupationalContent = () => (
    <View>
      <Text>Tooltip NonOccupational Content</Text>
    </View>
  );

  const renderTooltipOccupationalContent = () => (
    <View>
      <Text>Tooltip Occupational Content</Text>
    </View>
  );

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
                    <View style={styles.inputInfo}>
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
                      <Touch style={{position: 'absolute', left: '102%'}} onPress={() => setTooltipVisible('occupational')}>
                        <Image source={Images.info} />
                      </Touch>
                    </View>

                    {dirty && !state.oal_level && (
                      <Text style={styles.errorText}>Please choose one</Text>
                    )}
                  </View>
                  <View style={styles.formItem}>
                    <View style={styles.inputInfo}>
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

                      <Touch style={{position: 'absolute', left: '102%'}} onPress={() => setTooltipVisible('non-occupational')}>
                        <Image source={Images.info} />
                      </Touch>
                    </View>

                    {dirty && !state.eal_level && (
                      <Text style={styles.errorText}>Please choose one</Text>
                    )}
                  </View>
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <Tooltip
        isVisible={tooltipVisible === 'occupational'}
        title={<Text style={styles.titleTooltipUserinfo}>Occupational physical activity</Text>}
        content={renderTooltipOccupationalContent()}
        onCloseModal={() => setTooltipVisible(false)}
      />
      <Tooltip
        isVisible={tooltipVisible === 'non-occupational'}
        content={renderTooltipNonOccupationalContent()}
        title={<Text style={styles.titleTooltipUserinfo}>None-occupational physical activity</Text>}
        onCloseModal={() => setTooltipVisible(false)}
      />
      <ImageBackground source={Images.bg_main} style={{width: '100%'}}>
        <View style={styles.containerButtonFlexRow}>
          <Button
            text="Skip"
            width="20%"
            height={Responsive.h(30)}
            borderRadius={Responsive.h(10)}
            textStyle={{color: colors.WHITE, fontSize: Responsive.h(12)}}
            color={[colors.SKIP_BUTTON, colors.SKIP_BUTTON, colors.SKIP_BUTTON]}
            style={{justifyContent: 'center'}}
            onPress={() => props.navigation.navigate(NavigationRoutes.Home)}
          />
          <Button
            width="25%"
            height={Responsive.h(45)}
            borderRadius={Responsive.h(20)}
            text="Next"
            rightIcon={
              <Image
                source={Images.arrow_right}
                style={styles.largerArrowIcon}
              />
            }
            onPress={() => handleSubmit()}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UserInfoScreen;
