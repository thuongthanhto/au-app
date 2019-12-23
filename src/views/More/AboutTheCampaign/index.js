import React from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import HyperLink from 'react-native-hyperlink';

import stylesBasicInfo from '../../BasicInfo/styles';
import styles from '../AboutkJs/styles';

const AboutTheCampaign = () => {
  return (
    <SafeAreaView style={stylesBasicInfo.container}>
      <View style={stylesBasicInfo.topWrap} />
      <ScrollView>
        <View style={stylesBasicInfo.mainBody}>
          <Text style={styles.title}>About the campaign</Text>
          <Text style={stylesBasicInfo.textPragraph}>
            The 8700 campaign is an initiative by the NSW Government. It ensures
            consumers have information about the kJ content of menu items
            available for sale in major 'fast' food and snack chains. It also
            includes kJ content information on ready-to-eat foods and salads
            available through major supermarkets. The campaign is being
            delivered jointly by the NSW Ministry of Health and the NSW Food
            Authority.
          </Text>

          <HyperLink
            linkStyle={{color: '#2980b9'}}
            linkDefault
            linkText="8700.com.au/kids">
            <Text style={stylesBasicInfo.textPragraphLink}>
              Go to
              https://www.8700.com.au/kjs-and-kids/how-many-kjs-do-kids-need
            </Text>
          </HyperLink>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutTheCampaign;
