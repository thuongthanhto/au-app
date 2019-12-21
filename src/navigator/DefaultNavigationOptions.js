import React from 'react';
import { Image, StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { NavigationRoutes } from './Routes';
import Button from '../components/Button';
import { Images } from '../assets/images';
import Responsive from '../modules/utils/responsive';
import { colors } from '../modules/colors';


export const MainNavigationHeader = (props, textLeft, textRight, title) => {
  return {
    header: (
      <SafeAreaView>
        <LinearGradient
          colors={[colors.BLACK, colors.HEADER]}
          style={[styles.headerContainer, styles.shadowButton]}
          locations={[1,0.25,1]}
        >
          <HeaderBack props={props} text={textLeft}/>
          <Text style={styles.title}>{title}</Text>
          <HeaderRight props={props} text={textRight}/>
        </LinearGradient>
      </SafeAreaView>
    )
  };
};

export const HeaderRight = ({ props, text }) => (
  <Button
    width={Responsive.h(100)}
    height={Responsive.v(30)}
    text={text}
    onPress={() => props.navigation.navigate(NavigationRoutes.More)}
    textStyle={styles.textButton}
    styleGradient={styles.button}
    borderRadius={Responsive.h(7)}
    isHeader
    color={[colors.BLACK, colors.HEADER]}
    style={{ justifyContent: 'center' }}
  />
);

export const HeaderBack = ({ props, text }) => (
  <Button
    width={Responsive.h(100)}
    height={Responsive.v(30)}
    text={text}
    leftIcon={<Image source={Images.arrow_left_inverted} style={styles.largerArrowIcon} />}
    onPress={() => props.navigation.navigate(NavigationRoutes.Home)}
    textStyle={styles.textButton}
    styleGradient={styles.button}
    borderRadius={Responsive.h(7)}
    isHeader
    color={[colors.BLACK, colors.HEADER]}
  />
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: colors.WHITE,
    fontSize: Responsive.h(20),
  },
  button: {
    marginVertical: Responsive.v(10),
    marginHorizontal: Responsive.h(7),
    borderWidth: 0
  },
  textButton: {
    color: colors.WHITE,
    fontSize: Responsive.h(14)
  },
  largerArrowIcon: {
    width: Responsive.h(9),
    height: Responsive.h(14)
  },
  shadowButton: Platform.select({
    ios: {
      shadowRadius: Responsive.h(4), 
      shadowOpacity: 0.5, 
      shadowOffset: {
        width: 0,
        height: Responsive.h(4)
      },
      borderRadius: Responsive.h(7),
    },
    android: {
      elevation: 4,
      borderRadius: Responsive.h(7),
    }
  })
});