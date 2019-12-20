import React from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import {useDispatch} from 'react-redux';

import styles from '../styles';
import Button from '../../../components/Button';
import {NavigationRoutes} from '../../../navigator/Routes';
import {Images} from '../../../assets/images';

const LegalStuffScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleAgree = () => {
    dispatch({type: 'SAVE_TOUCH_AGREED'});
    navigation.navigate(NavigationRoutes.Welcome);
  };

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
      <View style={styles.footerWrap}>
        <ImageBackground
          source={Images.bg_main}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.containerButton}>
            <Button
              width={150}
              height={40}
              text="I have read and agree"
              onPress={() => handleAgree()}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default LegalStuffScreen;
