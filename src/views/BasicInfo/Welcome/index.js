import React from 'react';
import {View, Text, ImageBackground, Image, SafeAreaView} from 'react-native';

import styles from '../styles';
import Button from '../../../components/Button';
import {Images} from '../../../assets/images';
import Responsive from '../../../modules/utils/responsive';
import {NavigationRoutes} from '../../../navigator/Routes';

const WelcomeScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.contentWrap}>
        <View style={styles.textContentWrap}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.textPragraph}>
            We all need different amounts of energy for our bodies and physical
            activity. To make this app specific to you, we need to grab some
            details. If this is ok...
          </Text>
        </View>
        <View style={styles.imageContentWrap}>
          <Image source={Images.home_food_1_tablet} style={styles.image} />
        </View>
      </View>
      <ImageBackground source={Images.bg_main} style={{width: '100%'}}>
        <View style={styles.containerButtonFlexRow}>
          <Button
            width="100%"
            height={Responsive.h(45)}
            text="Let's get stated"
            rightIcon={
              <Image
                source={Images.arrow_right}
                style={styles.largerArrowIcon}
              />
            }
            onPress={() => props.navigation.navigate(NavigationRoutes.UserInfo)}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
