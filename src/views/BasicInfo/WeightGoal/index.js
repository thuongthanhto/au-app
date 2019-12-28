import React, {useState, useReducer} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Image,
  TouchableOpacity as Touch,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useSelector, useDispatch} from 'react-redux';
import HyperLink from 'react-native-hyperlink';
import styles from '../styles';
import pickerSelectStyles from '../pickerSelectStyles';
import Button from '../../../components/Button';
import {Images} from '../../../assets/images';
import {customReducer, calculateGoalBMR} from '../../../modules/utils/helpers';
import {weightGoals} from './config';
import Responsive from '../../../modules/utils/responsive';
import {colors} from '../../../modules/colors';
import {NavigationRoutes} from '../../../navigator/Routes';
import {getProfileSelector} from '../../../selectors/homeSelector';
import {Tooltip} from '../../../components/Tooltip';

const WeightGoal = props => {
  const oldProfile = useSelector(state => getProfileSelector(state));
  const initState = {
    weight_goal: '',
  };
  const [dirty, setDirty] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [state, setState] = useReducer(customReducer, initState);
  const dispatch = useDispatch();

  const checkValidate = () => {
    if (state.weight_goal === '') {
      return false;
    }

    return true;
  };

  const renderTooltipContent = () => (
    <View>
      <Text style={styles.tooltipPragraph}>
        'Maintain current weight' if you think you are 'about right'.
      </Text>
      <Text style={styles.tooltipPragraph}>
        'Reduce by 0.5 kg/week' if you want to reduce weight. This is a healthy,
        reasonable target that people find they can stick with and achieve. Not
        suitable for children, though.
      </Text>
    </View>
  );

  const handleChange = (name, value) => {
    setState({[name]: value});
  };

  const handleSubmit = () => {
    setDirty(true);

    if (checkValidate() === true) {
      const result = calculateGoalBMR(state.weight_goal, oldProfile);
      dispatch({type: 'SAVE_PROFILE', payload: result});
      props.navigation.navigate(NavigationRoutes.YourIdealFigure);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <ScrollView>
        <View style={styles.contentWrap}>
          <View style={styles.textContentWrap}>
            <Text style={styles.welcomeText}>Your Goal</Text>
            <Text style={styles.textPragraph}>
              Is your goal to maintain your current weight, or would you like to
              reduce it? You can update this at any time.
            </Text>
            <View style={styles.formItem}>
              <View style={styles.inputInfo}>
                <RNPickerSelect
                  value={state.weight_goal}
                  items={weightGoals}
                  placeholder={{
                    label: 'Your weight goal',
                    value: null,
                  }}
                  onValueChange={text => handleChange('weight_goal', text)}
                  useNativeAndroidPickerStyle={false}
                  style={pickerSelectStyles}
                  Icon={() => {
                    return <View style={styles.iconSelect} />;
                  }}
                />

                <Touch
                  style={{position: 'absolute', left: '102%'}}
                  onPress={() => setTooltipVisible(true)}>
                  <Image source={Images.info} />
                </Touch>
              </View>

              {dirty && state.weight_goal === '' && (
                <Text style={styles.errorText}>Select your weight goal</Text>
              )}
            </View>
            <View style={styles.linkWrap}>
              <HyperLink
                linkStyle={{color: '#2980b9'}}
                linkDefault
                linkText="Healthy Weight BMI tool">
                <Text style={styles.textPragraphLink}>
                  To check your weight status, go to the
                  https://www.govcms.gov.au/ or the
                </Text>
              </HyperLink>
              <HyperLink
                linkStyle={{color: '#2980b9'}}
                linkDefault
                linkText="Measure Up page">
                <Text style={styles.textPragraphLink}>
                  https://www.govcms.gov.au
                </Text>
              </HyperLink>
            </View>
          </View>
        </View>
      </ScrollView>
      <Tooltip
        isVisible={tooltipVisible}
        title="Occupational physical activity"
        content={renderTooltipContent()}
        onCloseModal={() => setTooltipVisible(false)}
      />
      <ImageBackground source={Images.bg_main} style={{width: '100%'}}>
        <View style={styles.containerButtonFlexRow}>
          <Button
            text="Back"
            width="20%"
            height={Responsive.h(30)}
            borderRadius={Responsive.h(10)}
            textStyle={{color: colors.WHITE, fontSize: Responsive.h(12)}}
            style={{paddingHorizontal: Responsive.h(10)}}
            color={[colors.SKIP_BUTTON, colors.SKIP_BUTTON, colors.SKIP_BUTTON]}
            onPress={() => props.navigation.goBack()}
            leftIcon={
              <Image
                source={Images.arrow_left_inverted}
                style={styles.smallArrowIcon}
              />
            }
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

export default WeightGoal;
