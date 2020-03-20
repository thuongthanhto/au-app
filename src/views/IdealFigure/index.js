import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity as Touch,
} from 'react-native';
import HyperLink from 'react-native-hyperlink';
import {useSelector} from 'react-redux';

import styles from '../BasicInfo/styles';
import {getProfileSelector} from '../../selectors/homeSelector';
import {toClosest} from '../../modules/utils/helpers';
import {Images} from '../../assets/images';
import {Tooltip} from '../../components/Tooltip';
import {NavigationRoutes} from '../../navigator/Routes';

const IdealFigureScreen = ({navigation}) => {
  const profile = useSelector(state => getProfileSelector(state));
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const figure =
    profile.BMR && profile.BMR.goal
      ? `${toClosest(profile.BMR.goal.value, 100)} kj`
      : '';
  const tolerance =
    profile.BMR && profile.BMR.current ? profile.BMR.current.tolerance : 0;

  if (!figure) {
    navigation.navigate(NavigationRoutes.UserInfo);
  }

  let figureRange = '';
  if (tolerance) {
    figureRange = `${toClosest(profile.BMR.goal.bottom, 100)} kJ - ${toClosest(
      profile.BMR.goal.top,
      100,
    )} kJ`;
  }

  const renderTooltipContent = () => (
    <View>
      <Text style={styles.textPragraph}>
        Calculator results are based on population averages and are
        approximations. Individual needs are likely to vary. Where possible, a
        range of ideal kJ figures is provided as a guide.
      </Text>
      <Text style={styles.textPragraph}>
        If you want a tailored, personal weight management plan, you should
        consult your doctor or accredited practising dietitian.
      </Text>
      <Text style={styles.textPragraph}>
        The calculator is provided for instruction and general information
        purposes only. It is not intended for medical diagnosis or treatment.
      </Text>
      <Text style={styles.textPragraph}>
        It doesn't provide for pregnant or breastfeeding women, and may be less
        suitable for people involved heavily in sporting activities, with some
        health conditions or whose weight-to-age ratio differs from the
        population average.
      </Text>
      <Text style={styles.textPragraph}>
        Calculations are based on the approach by McNeill, in Garrow, James &
        Ralph (eds), 2000, Human nutrition and dietetics.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.containerWithColor}>
      <View style={styles.topWrap} />
      <ScrollView>
        <View style={styles.contentWrap}>
          <View style={styles.textContentWrap}>
            <Text style={styles.h3}>Remember your figure</Text>
            <View>
              <Text style={styles.figure}>{figure}</Text>
              <Touch
                style={{position: 'absolute', left: '102%', top: 10}}
                onPress={() => setTooltipVisible(true)}>
                <Image source={Images.info} />
              </Touch>
            </View>

            {tolerance !== 0 && (
              <Text style={styles.figureRange}>{figureRange}</Text>
            )}
            <Text style={styles.h2}>What does this figure mean?</Text>
            <Text style={styles.textPragraph}>
              This calculator is designed to give a guide to the approximate
              amount of kJs you need to consume each day to hit your goal,
              whether you want to maintain your current weight, or get closer to
              your weight goal over a healthy period.
            </Text>

            <Text style={styles.textPragraph}>
              Just click on the 'Inputs' button above, complete each of the
              variable fields then hit 'Done' and your suggested daily kJ intake
              is updated for you.
            </Text>

            <Text style={styles.textPragraph}>
              But remember, everyone's body works differently and this is just
              an approximate guide based on your inputs. A useful guide over
              time to whether you are getting the ideal number of kJs is whether
              you are gaining or losing weight. If you find that your suggested
              intake is not providing the results you're after, start by
              adjusting your kJ intake by 500 kJs per day for a few weeks and
              check the effect on your weight.
            </Text>

            <Text style={styles.textPragraph}>
              The good news is: small changes can make a big difference. And
              with a little effort you can make the changes you want.
            </Text>

            <HyperLink
              linkStyle={{color: '#2980b9'}}
              linkDefault
              linkText="accredited practising dietician">
              <Text style={styles.textPragraph}>
                If you would like more information about healthy weight or
                you're concerned you may be under or over weight, consult your
                doctor or
                https://daa.asn.au/maintaining-professional-standards/register-of-apds/
                to get the right advice for you.
              </Text>
            </HyperLink>
          </View>
        </View>
      </ScrollView>
      <Tooltip
        isVisible={tooltipVisible}
        title="How was this figure calculated?"
        isBoldTitle
        content={renderTooltipContent()}
        onCloseModal={() => setTooltipVisible(false)}
      />
    </SafeAreaView>
  );
};

export default IdealFigureScreen;
