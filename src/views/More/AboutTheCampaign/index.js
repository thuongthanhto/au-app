import React from 'react';
import {SafeAreaView, View, Text, Image, Linking} from 'react-native';
import stylesBasicInfo from '../../BasicInfo/styles';
import styles from '../AboutkJs/styles';
import {Images} from '../../../assets/images';

const AboutTheCampaign = () => {
  return (
    <SafeAreaView style={stylesBasicInfo.container}>
      <View style={stylesBasicInfo.topWrap} />
      <View style={stylesBasicInfo.mainBody}>
        <Text style={styles.title}>About the campaign</Text>
        <Text style={stylesBasicInfo.textPragraph}>
          The 8700 campaign is an initiative by the NSW Government. It ensures
          consumers have information about the kJ content of menu items
          available for sale in major 'fast' food and snack chains. It also
          includes kJ content information on ready-to-eat foods and salads
          available through major supermarkets. The campaign is being delivered
          jointly by the NSW Ministry of Health and the NSW Food Authority.
        </Text>

        <View style={styles.imageWrap}>
          <Image source={Images.nswfa_logo} style={styles.image} />
        </View>

        <Text
          style={stylesBasicInfo.textPragraph}
          onPress={() => Linking.openURL('https://www.8700.com.au/')}>
          Go to{' '}
          <Text style={[stylesBasicInfo.textPragraph, {color: '#00AAEA'}]}>
            www.8700.com.au
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutTheCampaign;
