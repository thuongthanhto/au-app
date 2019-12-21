import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, Image } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

import styles from '../styles';
import bgImg from '../assets/bg_main.jpg';
import Button from '../../../components/Button';
import { Images } from '../../../assets/images';
import { colors } from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';
import { NavigationRoutes } from '../../../navigator/Routes';

const LegalStuffScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.contentWrap}>
        <View style={styles.textContentWrap}>
          <Text style={styles.welcomeText}>Legal Stuff</Text>
          <Text style={styles.textPragraph}>
            This material is provided free of charge for information purposes
            only. It is general in nature and not a substitute for seeking
            appropriate medical or nutrition advice, nor can it be relied upon
            as medical, nutrition or legal advice.
          </Text>
          <Hyperlink
            linkDefault
            linkStyle={{color: '#2980b9'}}
            linkText="8700.com.au/termsofuse">
            <Text style={styles.textPragraph}>
              Please review our full Terms of Use at
              https://www.8700.com.au/disclaimer and made clickable.
            </Text>
          </Hyperlink>
        </View>
      </View>
      <ImageBackground source={bgImg} style={{width: '100%'}}>
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

export default LegalStuffScreen;
