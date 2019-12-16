import React from 'react';
import { ReinputButton } from 'reinput';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { colors } from '../../../modules/colors';
import Responsive from '../../../modules/utils/responsive';

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 0,
    top: Responsive.v(15),
  },
  group: {
    // flex: 1,
    height: Responsive.v(64),
  },
});

export class InputDatePicker extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
    };
  }

  onConfirm = (value) => {
    this.setState({
      showDatePicker: false,
    });
    this.props.onChangeDate(value);
  };

  render() {
    const { showDatePicker } = this.state;
    const { label, input, props, mode, defaultValue, error } = this.props;
    return (
      <View style={styles.group}>
        <ReinputButton
          {...input}
          label={label}
          labelColor={colors.LIGHT_GRAY}
          labelActiveColor={colors.LIGHT_GRAY}
          underlineActiveColor={colors.LIGHT_GRAY}
          underlineColor={colors.LIGHT_GRAY}
          placeholderColor={colors.LIGHT_GRAY}
          color={colors.LIGHT_GRAY}
          value={defaultValue}
          error={error}
          onPress={() => this.setState({ showDatePicker: true })}
        />
        <Icon name='calendar-alt' size={20} color='gray' style={styles.icon} />
        <DateTimePicker
          {...props}
          mode={mode}
          isVisible={showDatePicker}
          onConfirm={value => this.onConfirm(value)}
          onCancel={() => this.setState({ showDatePicker: false })}
        />
      </View>
    );
  }
};

