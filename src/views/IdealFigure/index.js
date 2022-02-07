import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity as Touch,
  Linking,
} from 'react-native';
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
            <Text style={styles.h3}>Your kilojoule needs</Text>
            <View>
              <Text style={styles.figure}>{figure}</Text>
            </View>

            {tolerance !== 0 && (
              <Text style={styles.figureRange}>{figureRange}</Text>
            )}
            <Text style={styles.h2}>What does this number mean?</Text>
            <Text style={styles.textPragraph}>
              This calculator provides you with an approximate guide to the
              number of kilojoules (kJ) - a measure of energy - to consume each
              day to help maintain a healthy weight.
            </Text>

            <Text style={styles.textPragraph}>
              The number changes depending on your inputs. Click on the ‘Inputs’
              button above, complete each of the fields, and your suggested
              daily kJ intake will be updated for you.
            </Text>

            <Text
              style={styles.textPragraph}
              onPress={() =>
                Linking.openURL(
                  'https://daa.asn.au/maintaining-professional-standards/register-of-apds/',
                )
              }>
              It’s important to remember that everyone’s body works differently,
              and this is just an approximate guide. If you would like more
              information about maintaining a healthy weight, consult your
              doctor or{' '}
              <Text style={[styles.textPragraph, {color: '#00AAEA'}]}>
                accredited practising dietician
              </Text>
              <Text style={styles.textPragraph}>
                {' '}
                to get the right advice for you.
              </Text>
            </Text>

            <Text style={styles.textPragraph}>
              The best way to move into a healthier lifestyle is to start with
              small, simple changes which can have a big impact on your overall
              health and wellbeing.
            </Text>
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
