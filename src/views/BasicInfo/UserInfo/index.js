import React, {useReducer, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles';
import Button from '../../../components/Button';
import {colors} from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';
import {NavigationRoutes} from '../../../navigator/Routes';
import {Images} from '../../../assets/images';
import {
  updateProfileCalculations,
  customReducer,
} from '../../../modules/utils/helpers';
import {getProfileSelector} from '../../../selectors/homeSelector';
import {DEFAULT_PROFILE} from '../../../modules/utils/constants';
import Layout from '../../../layouts';
import UserInfoForm from '../../../components/UserInfoForm';
import FooterActions from '../../../components/FooterActions';

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
  const [state, setState] = useReducer(customReducer, initState);

  const dispatch = useDispatch();

  const checkValidate = () => {
    if (!state.age) {
      return false;
    }
    if (parseInt(state.age, 0) < 10) {
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
    <Layout>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.contentWrap}>
            <Text style={styles.title}>It's this easy</Text>
            <Text style={styles.textPragraph}>
              {`Please enter some details about yourself. \nDoing this means when we're talking about kilojoules, we're talking about you.`}
            </Text>

            <UserInfoForm
              state={state}
              handleChange={handleChange}
              dirty={dirty}
            />
          </View>
        </View>
      </ScrollView>

      <FooterActions>
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
            <Image source={Images.arrow_right} style={styles.largerArrowIcon} />
          }
          onPress={() => handleSubmit()}
        />
      </FooterActions>
    </Layout>
  );
};

export default UserInfoScreen;
