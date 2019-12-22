import React from 'react';
import { Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { NavigationRoutes } from './Routes';
import Button from '../components/Button';
import { Images } from '../assets/images';
import Responsive from '../modules/utils/responsive';
import { colors } from '../modules/colors';


export const MainNavigationHeader = (props, textLeft, textRight, title) => {
  return {
    header: (
      <SafeAreaView style={{ backgroundColor: '#00AAEA'}}>
        <LinearGradient
          colors={[colors.HEADER, colors.BLACK]}
          style={[styles.headerContainer]}
          locations={[0.5,0.5]}
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
    onPress={() => text && props.navigation.navigate(NavigationRoutes.More)}
    textStyle={styles.textButton}
    styleGradient={[styles.button, text && styles.shadowButton, !text && { borderWidth: 0 }]}
    borderRadius={Responsive.h(7)}
    isHeader
    color={text ? [colors.HEADER, colors.BLACK] : ['transparent', 'transparent', 'transparent']}
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
    styleGradient={[styles.button, styles.shadowButton]}
    borderRadius={Responsive.h(7)}
    isHeader
    color={[colors.HEADER, colors.BLACK]}
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
    fontFamily: 'PTSans-Regular',
  },
  button: {
    marginVertical: Responsive.v(10),
    marginHorizontal: Responsive.h(7)
  },
  textButton: {
    color: colors.WHITE,
    fontSize: Responsive.h(14),
    fontFamily: 'PTSans-Bold',
  },
  largerArrowIcon: {
    width: Responsive.h(9),
    height: Responsive.h(14)
  },
  shadowButton: {
    shadowColor: "#616161",
    shadowOpacity: 0.5,
    shadowRadius: Responsive.h(5),

    elevation: Responsive.h(5),
    borderWidth: 1,
    borderColor: '#616161'
  }
});