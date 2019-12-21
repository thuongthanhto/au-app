import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import stylesHome from '../styles';
import {Images} from '../../../assets/images';
import Button from '../../../components/Button';
import {colors} from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';
import {NavigationRoutes} from '../../../navigator/Routes';
import {getProfileSelector} from '../../../selectors/homeSelector';
import {toClosest} from '../../../modules/utils/helpers';

const YourIdealFigureScreen = props => {
  const profile = useSelector(state => getProfileSelector(state));
  console.log(profile);
  const figure =
    profile.BMR && profile.BMR.goal
      ? `${toClosest(profile.BMR.goal.value, 100)} kj`
      : '';
  const tolerance =
    profile.BMR && profile.BMR.current ? profile.BMR.current.tolerance : 0;

  let figureRange = '';
  if (tolerance) {
    figureRange = `${toClosest(profile.BMR.goal.bottom, 100)} kJ - ${toClosest(
      profile.BMR.goal.top,
      100,
    )} kJ`;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <ScrollView>
        <View style={styles.contentWrap}>
          <View style={styles.textContentWrap}>
            <Text style={styles.title}>Your ideal figure</Text>
            <Text style={styles.figure}>{figure}</Text>
            {tolerance !== 0 && (
              <Text style={styles.figureRange}>{figureRange}</Text>
            )}

            {profile.weight_goal === 0 && (
              <Text style={styles.textPragraph}>
                To maintain your current weight, you need to consume the number
                of kJs above on a daily basis.
              </Text>
            )}

            {profile.weight_goal === -1 && (
              <>
                <Text style={styles.textPragraph}>
                  You should consume approximately the number of kJs shown
                  above. It includes a 2000 kJ/day reduction to achieve weight
                  loss of about 0.5 kg/week, which is a healthy rate most people
                  find they can achieve and stick to. (Not suitable for
                  children, though).
                </Text>
                <Text style={styles.textPragraph}>
                  Or, instead of reducing your kJ intake, you could do 2000 kJ
                  more activity every day than you are currently doing. Or some
                  of both. Physical activity is important to maintain good
                  health.
                </Text>
              </>
            )}

            {profile.weight_goal === 1 && (
              <Text style={styles.textPragraph}>
                To gain weight, you need to consume approximately the number of
                kJs above on a daily basis. In other words, to reach your weight
                gain goal at a rate of 0.5kg per week, you'd need to increase
                your current energy intake by 2000kJ per day. Not suitable for
                children.
              </Text>
            )}

            <Text style={styles.textPragraph}>
              This is just a guide, and it may take some trial and error. For
              more details, see My Ideal Figure on the Home screen.
            </Text>
          </View>
        </View>
      </ScrollView>
      <ImageBackground source={Images.bg_main} style={{width: '100%'}}>
        <View style={stylesHome.containerButtonFlexRow}>
          <Button
            text="Back"
            width={Responsive.h(80)}
            height={Responsive.h(40)}
            borderRadius={Responsive.h(25)}
            textStyle={{color: colors.WHITE, fontSize: Responsive.h(12)}}
            style={{
              paddingHorizontal: Responsive.h(10),
              justifyContent: 'space-around',
            }}
            color={[colors.SKIP_BUTTON, colors.SKIP_BUTTON, colors.SKIP_BUTTON]}
            onPress={() => props.navigation.goBack()}
            leftIcon={
              <Image
                source={Images.arrow_left_inverted}
                style={stylesHome.smallArrowIcon}
              />
            }
          />
          <Button
            width="25%"
            height={Responsive.h(45)}
            borderRadius={Responsive.h(25)}
            text="Next"
            rightIcon={
              <Image
                source={Images.arrow_right}
                style={stylesHome.largerArrowIcon}
              />
            }
            onPress={() => props.navigation.navigate(NavigationRoutes.Home)}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default YourIdealFigureScreen;
