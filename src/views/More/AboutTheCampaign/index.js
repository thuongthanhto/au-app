import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import stylesBasicInfo from '../../BasicInfo/styles';
import styles from '../AboutkJs/styles';
import {Images} from '../../../assets/images';

const AboutTheCampaign = () => {
  return (
    <SafeAreaView style={stylesBasicInfo.container}>
      <View style={stylesBasicInfo.topWrap} />
      <ScrollView>
        <View style={stylesBasicInfo.mainBody}>
          <Text style={styles.title}>About 8700</Text>
          <View style={stylesBasicInfo.textPragraph}>
            <Text style={stylesBasicInfo.textPragraphFake}>
              The 8700 app is an initiative by the NSW Government. It ensures
              consumers have information about the kJ content of menu items
              available for sale in major 'fast' food and snack chains. It also
              includes kJ content information on ready-to-eat foods and salads
              available through major supermarkets. This initiative is being delivered jointly by the NSW Ministry of
              Health and the NSW Food Authority.
            </Text>
          </View>

          <View style={styles.imageWrap}>
            <Image source={Images.nswfa_logo} style={styles.image} />
          </View>
          <Text
            style={stylesBasicInfo.textPragraph}
            onPress={() => Linking.openURL('https://www.healthyliving.nsw.gov.au/Pages/kilojoules-calories.aspx')}>
            Learn more at {' '}
            <Text style={[stylesBasicInfo.textPragraph, {color: '#00AAEA'}]}>
              Healthy Eating Active Living.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutTheCampaign;
