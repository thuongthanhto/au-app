import React from 'react';
import {View, Text, Linking} from 'react-native';
import Layout from '../../../layouts';
import styles from '../../BasicInfo/styles';

const LegalStuffMoreScreen = () => {
  return (
    <Layout>
      <View style={styles.content}>
        <View style={styles.contentWrap}>
          <Text style={styles.title}>Legal stuff</Text>
          <Text style={styles.textPragraph}>
            This material is provided free of charge for information purposes
            only. It is general in nature and not a substitute for seeking
            appropriate medical or nutrition advice, nor can it be relied upon
            as medical, nutrition or legal advice.
          </Text>

          <Text
            style={styles.textPragraph}
            onPress={() =>
              Linking.openURL('https://www.healthyliving.nsw.gov.au/Pages/kilojoules-calories.aspx')
            }>
            Learn more at{' '}
            <Text style={[styles.textPragraph, {color: '#00AAEA'}]}>
            Healthy Eating Active Living.
            </Text>
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default LegalStuffMoreScreen;
