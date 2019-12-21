import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import Button from '../../../components/Button';
import {NavigationRoutes} from '../../../navigator/Routes';
import {Images} from '../../../assets/images';
import {getProfileSelector} from '../../../selectors/homeSelector';
import {toClosest} from '../../../modules/utils/helpers';

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

            <Text style={styles.textPragraph}>
              To gain weight, you need to consume approximately the number of
              kJs above on a daily basis. In other words, to reach your weight
              gain goal at a rate of 0.5kg per week, you'd need to increase your
              current energy intake by 2000kJ per day. Not suitable for
              children.
            </Text>
            <Text style={styles.textPragraph}>
              This is just a guide, and it may take some trial and error. For
              more details, see My Ideal Figure on the Home screen.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerWrap}>
        <ImageBackground
          source={Images.bg_main}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.containerButton}>
            <Button
              width={150}
              height={40}
              text="Continues"
              onPress={() => props.navigation.navigate(NavigationRoutes.Home)}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default YourIdealFigureScreen;
