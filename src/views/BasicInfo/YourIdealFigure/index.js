import React from 'react';
import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';

import styles from './styles';
import { Images } from '../../../assets/images';
import Button from '../../../components/Button';
import { colors } from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';
import { NavigationRoutes } from '../../../navigator/Routes';

const YourIdealFigureScreen = (props) => {
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
      <ImageBackground source={Images.bg_main} style={{width: '100%'}}>
        <View style={styles.containerButtonFlexRow}>
          <Button
            text="Back"
            width={Responsive.h(70)}
            height={Responsive.v(25)}
            borderRadius={Responsive.h(12)}
            textStyle={{ color: colors.WHITE, fontSize: Responsive.h(12) }}
            style={{ paddingHorizontal: Responsive.h(10) }}
            color={[colors.SKIP_BUTTON, colors.SKIP_BUTTON, colors.SKIP_BUTTON]}
            onPress={() => props.navigation.goBack()}
            leftIcon={<Image source={Images.arrow_left_inverted} style={styles.smallArrowIcon} />}
          />
          <Button
            width="25%"
            height={Responsive.v(37)}
            text="Next"
            rightIcon={<Image source={Images.arrow_right} style={styles.largerArrowIcon} />}
            onPress={() => props.navigation.navigate(NavigationRoutes.Home)}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default YourIdealFigureScreen;
