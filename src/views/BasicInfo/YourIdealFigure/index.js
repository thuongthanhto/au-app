import React from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';

import styles from './styles';
import bgImg from '../assets/bg_main.jpg';
import Button from '../../../components/Button';
import {NavigationRoutes} from '../../../navigator/Routes';

const YourIdealFigureScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.contentWrap}>
        <View style={styles.textContentWrap}>
          <Text style={styles.title}>Your ideal figure</Text>
          <Text style={styles.figure}>6000 kJ</Text>
          <Text style={styles.textPragraph}>
            To gain weight, you need to consume approximately the number of kJs
            above on a daily basis. In other words, to reach your weight gain
            goal at a rate of 0.5kg per week, you'd need to increase your
            current energy intake by 2000kJ per day. Not suitable for children.
          </Text>
          <Text style={styles.textPragraph}>
            This is just a guide, and it may take some trial and error. For more
            details, see My Ideal Figure on the Home screen.
          </Text>
        </View>
      </View>
      <View style={styles.footerWrap}>
        <ImageBackground source={bgImg} style={{width: '100%', height: '100%'}}>
          <View style={styles.containerButton}>
            <Button
              width={150}
              height={40}
              text="Continues"
              onPress={() => props.navigation.navigate(NavigationRoutes.Home)}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default YourIdealFigureScreen;
