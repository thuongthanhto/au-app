import React from 'react';
import {SafeAreaView, View, ScrollView, Text, Linking} from 'react-native';
import stylesBasicInfo from '../../BasicInfo/styles';
import styles from './styles';

const AboutkJs = () => {
  return (
    <SafeAreaView style={stylesBasicInfo.container}>
      <View style={stylesBasicInfo.topWrap} />
      <ScrollView>
        <View style={stylesBasicInfo.mainBody}>
          <Text style={styles.title}>About kilojoules</Text>
          <Text style={stylesBasicInfo.textPragraph}>
            kJ (kilojoules) is the Australian measure of how much energy people
            get from consuming a food or drink.
          </Text>
          <Text style={stylesBasicInfo.textPragraph}>
            Energy in food and drinks is measured by the number of kJs
            (kilojoules) it provides.
          </Text>
          <Text style={stylesBasicInfo.textPragraph}>
            We need energy for our bodies and physical activity.
          </Text>
          <Text style={stylesBasicInfo.textPragraph}>
            Knowing the number of kJs in the food we eat can help ensure we get
            the right amount of energy for our needs.
          </Text>
          <Text style={stylesBasicInfo.textPragraph}>
            If we eat more kJs than our bodies burn off on a regular basis, then
            we gain weight.
          </Text>
          <Text style={stylesBasicInfo.textPragraph}>
            Like adults, there is no exact kilojoule number for kids – every
            child is different, and the most important thing is to support their
            overall health and wellbeing. If you're concerned about your or your
            family’s weight, consult a qualified health professional.
          </Text>
          <Text
            style={[stylesBasicInfo.textPragraph, styles.paddingLine]}
            onPress={() =>
              Linking.openURL(
                'https://www.healthyliving.nsw.gov.au/Pages/kilojoules-calories.aspx',
              )
            }>
            Learn more about kilojoules at{' '}
            <Text style={[stylesBasicInfo.textPragraph, {color: '#00AAEA'}]}>
              Healthy Eating Active Living.
            </Text>
          </Text>
          <Text style={[stylesBasicInfo.textPragraph, styles.paddingLine]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutkJs;
