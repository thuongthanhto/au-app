import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

import styles from '../styles';
import bgImg from '../assets/bg_main.jpg';
import foodImg from '../assets/home_food_1_tablet.png';
import Button from '../../../components/Button';

const Welcome = () => {
  return (
    <View style={styles.container}>
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
          <Image source={foodImg} style={styles.image} />
        </View>
      </View>
      <View style={styles.footerWrap}>
        <ImageBackground source={bgImg} style={{width: '100%', height: '100%'}}>
          <View style={styles.containerButton}>
            <Button
              width={150}
              height={40}
              text="Continues"
              // loading={loading}
              // disabled={loading}
              // onPress={this.handleSaveSchedule}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Welcome;
