import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

class Button extends React.PureComponent {
  
  render() {
    const { title, onPress, containerStyle, titleStyle } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;