import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, StyleSheet, TouchableOpacity as Touch } from 'react-native';

import { colors } from '../../modules/colors';
import Responsive from '../../modules/utils/responsive';

export const Button = ({
  text, 
  style, 
  width, 
  height, 
  textStyle, 
  leftIcon, 
  isHeader,
  rightIcon, 
  borderRadius,
  styleGradient,
  color=[colors.BORDER, colors.BUTTON, colors.BORDER],
  ...others 
}) => (
  <LinearGradient
    colors={color}
    style={StyleSheet.flatten([styles.container, width && { width }, height && { height }, borderRadius && { borderRadius }, styleGradient])}
    locations={isHeader && [1,0.25,1]}
  >
    <Touch
      {...others}
      style={StyleSheet.flatten([styles.btn, style])}
    >
      {leftIcon && leftIcon}
      <Text style={StyleSheet.flatten([styles.text, textStyle])}>{text}</Text>
      {rightIcon && rightIcon}
    </Touch>
  </LinearGradient>
);

const styles = StyleSheet.create({
  text: {
    fontSize: Responsive.h(16),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.TEXT_BUTTON,
  },
  container: {
    justifyContent: 'center',
    borderRadius: Responsive.h(20),
    borderWidth: 1,
    borderColor: colors.BORDER
  },
  btn: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: Responsive.h(15)
  }
});

export default Button;
