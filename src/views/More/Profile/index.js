import React, {useReducer, useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import commonStyle from '../styles';
import styles from './styles';
import {
  customReducer,
  updateProfileCalculations,
} from '../../../modules/utils/helpers';
import {getProfileSelector} from '../../../selectors/homeSelector';
import {NavigationRoutes} from '../../../navigator/Routes';
import {DEFAULT_PROFILE} from '../../../modules/utils/constants';
import Button from '../../../components/Button';
import Responsive from '../../../modules/utils/responsive';
import UserInfoForm from '../../../components/UserInfoForm';

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

      props.navigation.navigate(NavigationRoutes.Home);
    }
  };

  const handleClear = () => {
    dispatch({type: 'CLEAR_PROFILE'});
    props.navigation.navigate(NavigationRoutes.Welcome);
  };

  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.topWrap} />
      <View style={styles.body}>
        <Text style={styles.title}>Your saved profile</Text>
        <UserInfoForm state={state} handleChange={handleChange} dirty={dirty} />
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
            onPress={() => handleClear()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
