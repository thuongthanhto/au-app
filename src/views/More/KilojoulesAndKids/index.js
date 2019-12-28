import React from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import HyperLink from 'react-native-hyperlink';

import stylesBasicInfo from '../../BasicInfo/styles';
import styles from '../AboutkJs/styles';

const KilojoulesAndKids = () => {
  return (
    <SafeAreaView style={stylesBasicInfo.container}>
      <View style={stylesBasicInfo.topWrap} />
      <ScrollView>
        <View style={stylesBasicInfo.mainBody}>
          <Text style={styles.title}>Kilojoules and Kids</Text>
          <Text style={stylesBasicInfo.textPragraph}>
            Eating a healthy, balanced diet and being physically active are
            particularly important for kids. Bodies are still growing and
            behaviours formed now can last a lifetime.
          </Text>
          <Text style={stylesBasicInfo.textPragraph}>
            So they need fuel, but every child is different. Like adults, there
            is no magic, single kJ number for all kids. Doctors and other health
            care professionals are the best people to determine whether a child
            or adolescent's current weight is healthy. They have growth charts
            of weight-for-age and weight-for-height and they can consider a
            child's growth patterns.
          </Text>
          <Text style={stylesBasicInfo.textPragraph}>
            Our Ideal figure calculator uses special equations to suggest an
            ideal figure to maintain weight in children younger than 10 years
            and for teens. There is no option to make weight loss a goal if the
            profile age is less than 18 years.
          </Text>
          <Text style={stylesBasicInfo.textPragraph}>
            If you're concerned about their weight, consult a qualified health
            professional.
          </Text>
          <Text style={stylesBasicInfo.textPragraph}>
            For more information about explaining kJs to kids and fun activities
            to get kids moving:
          </Text>
          <HyperLink
            linkStyle={{color: '#2980b9'}}
            linkDefault
            linkText="8700.com.au/kids">
            <Text style={stylesBasicInfo.textPragraph}>
              Go to
              https://www.8700.com.au/kjs-and-kids/how-many-kjs-do-kids-need
            </Text>
          </HyperLink>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KilojoulesAndKids;
