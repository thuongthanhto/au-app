import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

export const Card = ({ children, elevation, opacity, borderRadius, backgroundColor, style, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles(elevation, opacity, borderRadius, backgroundColor).container, style]}>
    {children}
  </TouchableOpacity>
);
