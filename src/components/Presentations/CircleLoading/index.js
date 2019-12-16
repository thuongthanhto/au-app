import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';

import styles from './styles';
import { colors } from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';

export default class CircleLoading extends React.PureComponent {
  render() {
    const { isVisible, offset } = this.props;

    if (isVisible) {
      return (
        <SafeAreaView style={[styles.container, { top: -Responsive.h(!offset ? 0 : offset) }]}>
          <View style={styles.loadingContainer}>
            <MaterialIndicator color={colors.BLUE} size={Responsive.h(40)} />
          </View>
        </SafeAreaView>
      );
    }
    return null;
  }
}
