import React from 'react';
import {View, Text, Image} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import {useDispatch} from 'react-redux';
import Layout from '../../../layouts';
import styles from '../styles';
import Button from '../../../components/Button';
import {Images} from '../../../assets/images';
import Responsive from '../../../modules/utils/responsive';
import {NavigationRoutes} from '../../../navigator/Routes';
import FooterActions from '../../../components/FooterActions';

const LegalStuffScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleAgree = () => {
    dispatch({type: 'SAVE_TOUCH_AGREED'});
    navigation.navigate(NavigationRoutes.Welcome);
  };

  return (
    <Layout>
      <View style={styles.content}>
        <View style={styles.contentWrap}>
          <Text style={styles.title}>Legal Stuff</Text>
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
      <FooterActions>
        <Button
          width="100%"
          height={Responsive.h(45)}
          text="I have read and agree"
          rightIcon={
            <Image source={Images.arrow_right} style={styles.largerArrowIcon} />
          }
          onPress={() => handleAgree()}
        />
      </FooterActions>
    </Layout>
  );
};

export default LegalStuffScreen;
