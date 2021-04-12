import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../styles';
import {Images} from '../../../assets/images';
import Button from '../../../components/Button';
import {colors} from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';
import {NavigationRoutes} from '../../../navigator/Routes';
import {getProfileSelector} from '../../../selectors/homeSelector';
import {toClosest} from '../../../modules/utils/helpers';
import FooterActions from '../../../components/FooterActions';
import Layout from '../../../layouts';

const YourIdealFigureScreen = props => {
  const profile = useSelector(state => getProfileSelector(state));
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
    <Layout>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.contentWrap}>
            <Text style={styles.title}>Your KJ calculator</Text>
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
              more details, see My KJ calculator on the Home screen.
            </Text>
          </View>
        </View>
      </ScrollView>
      <FooterActions>
        <Button
          text="Back"
          width="20%"
          height={Responsive.h(30)}
          borderRadius={Responsive.h(10)}
          textStyle={{color: colors.WHITE, fontSize: Responsive.h(12)}}
          style={{paddingHorizontal: Responsive.h(10)}}
          color={[colors.SKIP_BUTTON, colors.SKIP_BUTTON, colors.SKIP_BUTTON]}
          onPress={() => props.navigation.goBack()}
          leftIcon={
            <Image
              source={Images.arrow_left_inverted}
              style={styles.smallArrowIcon}
            />
          }
        />
        <Button
          width="25%"
          height={Responsive.h(45)}
          borderRadius={Responsive.h(20)}
          text="Next"
          rightIcon={
            <Image source={Images.arrow_right} style={styles.largerArrowIcon} />
          }
          onPress={() => props.navigation.navigate(NavigationRoutes.Home)}
        />
      </FooterActions>
    </Layout>
  );
};

export default YourIdealFigureScreen;
