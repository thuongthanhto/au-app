import React from 'react';
import {ScrollView, SafeAreaView, Image, Linking} from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import {Images} from '../../assets/images';
import Responsive from '../../modules/utils/responsive';
import {NavigationRoutes} from '../../navigator/Routes';

const MoreScreen = props => {
  const goto8700 = () => {
    Linking.openURL('https://www.healthyliving.nsw.gov.au/').catch(err =>
      console.error("Couldn't load page", err),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.body}>
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Profile"
          styleGradient={{marginVertical: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          leftIcon={
            <Image source={Images.profile} style={styles.homeBigLeftIcon} />
          }
          onPress={() => props.navigation.navigate(NavigationRoutes.Profile)}
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="About kilojoules"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() => props.navigation.navigate(NavigationRoutes.AboutkJs)}
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Which outlets?"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() =>
            props.navigation.navigate(NavigationRoutes.WhichOutlets)
          }
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Visit Healthy Eating Active Living"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() => goto8700()}
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="About 8700"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() =>
            props.navigation.navigate(NavigationRoutes.AboutTheCampaign)
          }
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Legal stuff"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() =>
            props.navigation.navigate(NavigationRoutes.LegalStuffMore)
          }
          textStyle={{fontSize: Responsive.h(20)}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;
