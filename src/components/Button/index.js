import React from 'react';
import { Text, StyleSheet, TouchableOpacity as Touch, ActivityIndicator as Loading } from 'react-native';

import { colors } from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

export const Button = ({ text, style, width, height, textStyle, children, loading, icon, ...others }) => (
  <Touch
    {...others}
    style={StyleSheet.flatten([styles.btn, width && { width }, height && { height }, style])}
  >
    {children || [!!icon && React.cloneElement(icon, { key: "icon" }), !!loading && <Loading key="loading" color={colors.WHITE} style={styles.icon} />, <Text key="text" style={StyleSheet.flatten([styles.text, textStyle])}>{text}</Text>]}
  </Touch>
);

const styles = StyleSheet.create({
  btn: {
    margin: Responsive.h(5),
    padding: Responsive.h(7),
    paddingHorizontal: Responsive.h(12),
    borderRadius: Responsive.h(20),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.SCHEDULE_ITEM
  },
  text: {
    color: colors.WHITE,
  },
  icon: {
    marginRight: Responsive.h(5),
  },
});

export default Button;
