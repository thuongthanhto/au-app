import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

const styles = (elevation = 4, opacity = 0.5, borderRadius = 5, backgroundColor = colors.WHITE) => StyleSheet.create({
  container: Platform.select({
    ios: {
      shadowRadius: Responsive.h(elevation), 
      shadowOpacity: opacity, 
      shadowOffset: {
        width: 0,
        height: Responsive.h(elevation)
      },
      borderRadius: Responsive.h(borderRadius),
      backgroundColor,
    },
    android: {
      elevation,
      borderRadius: Responsive.h(borderRadius), 
      backgroundColor,
    }
  })
});

export default styles;
