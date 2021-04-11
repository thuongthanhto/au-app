import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {Images} from '../../assets/images';
import styles from './styles';

const FooterActions = ({children}) => {
  return (
    <ImageBackground source={Images.bg_main} style={{width: '100%'}}>
      <View style={styles.flexRow}>{children}</View>
    </ImageBackground>
  );
};

export default FooterActions;
