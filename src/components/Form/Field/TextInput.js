import React from 'react';
import Reinput from 'reinput';

import { colors } from '../../../modules/colors';

export const TextInput = ({ hideErorr, meta: { touched, error }, input, ...props }) => (
  <Reinput
    labelColor={colors.LIGHT_GRAY}
    labelActiveColor={colors.LIGHT_GRAY}
    underlineActiveColor={colors.LIGHT_GRAY}
    underlineColor={colors.LIGHT_GRAY}
    placeholderColor={colors.LIGHT_GRAY}
    {...props}
    {...input}
    {...(!hideErorr && touched && !!error ? { error } : {})}
  />
);

export default TextInput;

