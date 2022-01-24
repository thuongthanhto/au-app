import React from 'react';
import {View, SafeAreaView, Image, ImageBackground} from 'react-native';

import styles from '../styles';
import Button from '../../../components/Button';
import {Images} from '../../../assets/images';
import Responsive from '../../../modules/utils/responsive';
import {NavigationRoutes} from '../../../navigator/Routes';

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.homeBody}>
        <Image
          source={Images.app_title_retina}
          resizeMode="contain"
          style={styles.homeTitle}
        />
        <Image
          source={Images.home_food_1_tablet}
          resizeMode="contain"
          style={styles.homeImageFood}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Fast Food Search"
          styleGradient={{marginBottom: Responsive.v(10)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          leftIcon={
            <Image source={Images.search} style={styles.homeBigLeftIcon} />
          }
          onPress={() => props.navigation.navigate(NavigationRoutes.SearchForm)}
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Find your kilojoule needs"
          styleGradient={{marginBottom: Responsive.v(10)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          leftIcon={
            <Image
              source={Images.ideal_figure}
              style={styles.homeBigLeftIcon}
            />
          }
          onPress={() =>
            props.navigation.navigate(NavigationRoutes.IdealFigure)
          }
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Activity Calculator"
          styleGradient={{marginBottom: Responsive.v(10)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          leftIcon={
            <Image source={Images.burn} style={styles.homeBigLeftIcon} />
          }
          onPress={() => props.navigation.navigate(NavigationRoutes.BurnkJ)}
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Cal to kJ Converter"
          styleGradient={{marginBottom: Responsive.v(10)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          leftIcon={
            <Image source={Images.converter} style={styles.homeBigLeftIcon} />
          }
          onPress={() => props.navigation.navigate(NavigationRoutes.Converter)}
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <View
          style={[
            styles.containerButtonFlexRow,
            {paddingVertical: 0, paddingHorizontal: 0},
          ]}>
          <Button
            width="49%"
            height={Responsive.h(50)}
            text="Profile"
            rightIcon={
              <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
            }
            leftIcon={
              <Image source={Images.profile} style={styles.homeBigLeftIcon} />
            }
            onPress={() => props.navigation.navigate(NavigationRoutes.Profile)}
            textStyle={{fontSize: Responsive.h(20)}}
          />
          <Button
            width="49%"
            height={Responsive.h(50)}
            text="More"
            rightIcon={
              <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
            }
            leftIcon={
              <Image source={Images.more} style={styles.homeBigLeftIcon} />
            }
            onPress={() => props.navigation.navigate(NavigationRoutes.More)}
            textStyle={{fontSize: Responsive.h(20)}}
          />
        </View>
      </View>
      <ImageBackground
        source={Images.heal_banner}
        style={{
          width: '100%',
        }}
        imageStyle={{
          resizeMode: 'stretch',
        }}>
        <View style={{height: 70}} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
