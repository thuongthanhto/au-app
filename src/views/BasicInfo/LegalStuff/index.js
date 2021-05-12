import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../../../layouts';
import styles from '../styles';
import Button from '../../../components/Button';
import {Images} from '../../../assets/images';
import Responsive from '../../../modules/utils/responsive';
import {NavigationRoutes} from '../../../navigator/Routes';
import FooterActions from '../../../components/FooterActions';
import {getTouchAgreedSelector} from '../../../selectors/homeSelector';

const LegalStuffScreen = ({navigation}) => {
  const touchAgreed = useSelector(state => getTouchAgreedSelector(state));

  const dispatch = useDispatch();

  const handleAgree = () => {
    if (!touchAgreed) {
      dispatch({type: 'SAVE_TOUCH_AGREED'});
      navigation.navigate(NavigationRoutes.Welcome);
    } else {
      navigation.navigate(NavigationRoutes.More);
    }
  };

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
              Linking.openURL(
                'https://www.healthyliving.nsw.gov.au/Pages/Terms-Conditions.aspx',
              )
            }>
            Learn more at{' '}
            <Text style={[styles.textPragraph, {color: '#00AAEA'}]}>
              Healthy Eating Active Living – Terms and Conditions
            </Text>
          </Text>
        </View>
      </View>
      <FooterActions>
        <Button
          width="100%"
          height={Responsive.h(45)}
          text={touchAgreed ? 'Done' : 'I have read and agree'}
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
