import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from '../styles';
import {Images} from '../../../assets/images';
import Layout from '../../../layouts';
import FooterActions from '../../../components/FooterActions';
import Responsive from '../../../modules/utils/responsive';
import Button from '../../../components/Button';
import {NavigationRoutes} from '../../../navigator/Routes';

const WelcomeScreen = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.content}>
        <View style={styles.contentWrap}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.textPragraph}>
            Good eating habits help you live a longer, healthier life. To make
            this app specific to you, we need to grab some details.
          </Text>

          <View style={styles.imageWrap}>
            <Image source={Images.home_food_1_tablet} style={styles.image} />
          </View>
        </View>
      </View>
      <FooterActions rightText="">
        <Button
          width="100%"
          height={Responsive.h(45)}
          text="Let's get started"
          rightIcon={
            <Image source={Images.arrow_right} style={styles.largerArrowIcon} />
          }
          onPress={() => navigation.navigate(NavigationRoutes.UserInfo)}
        />
      </FooterActions>
      <ImageBackground
        source={Images.heal_banner}
        style={{
          width: '100%',
        }}
        imageStyle={{
          resizeMode: 'stretch',
        }}>
        <View style={{height: 74}} />
      </ImageBackground>
    </Layout>
  );
};

export default WelcomeScreen;
