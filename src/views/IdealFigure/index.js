import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from '../BasicInfo/YourIdealFigure/styles';

class IdealFigureScreen extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topWrap} />
        <ScrollView>
          <View style={styles.contentWrap}>
            <View style={styles.textContentWrap}>
              <Text style={styles.title}>Your ideal figure</Text>
              <Text style={styles.figure}>1111</Text>
              <Text style={styles.textPragraph}>
                You should consume approximately the number of kJs shown above.
                It includes a 2000 kJ/day reduction to achieve weight loss of
                about 0.5 kg/week, which is a healthy rate most people find they
                can achieve and stick to. (Not suitable for children, though).
              </Text>
              <Text style={styles.textPragraph}>
                Or, instead of reducing your kJ intake, you could do 2000 kJ
                more activity every day than you are currently doing. Or some of
                both. Physical activity is important to maintain good health.
              </Text>

              <Text style={styles.textPragraph}>
                This is just a guide, and it may take some trial and error. For
                more details, see My Ideal Figure on the Home screen.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default IdealFigureScreen;
