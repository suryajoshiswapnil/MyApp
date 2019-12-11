/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React, { FC, ComponentType } from 'react';

import { TextStyle } from 'react-native';
import { TouchableOpacity as TOpacity } from 'react-native';
import { TouchableNativeFeedback as TNFeedback } from 'react-native';

import { TouchableOpacityProps } from 'react-native';
import { TouchableNativeFeedbackProps } from 'react-native';

import Text from '../text';

import { device } from '../../../constant';
import { withStyle } from '../../../util';
import { defaultProps, defaultStyles } from './default';

type TouchableProps = TouchableOpacityProps | TouchableNativeFeedbackProps;
type TouchableType = ComponentType<TouchableProps>;

export type BtnProps = TouchableProps & {
  styles: any; // TODO: Need more specific type.
  label?: string;
  outline?: boolean;
  labelStyle?: TextStyle;
};

const Touchable: TouchableType = device.isAndroid ? TNFeedback : TOpacity;

/**
 * Button - Renders a button view using the native touchable component available.
 * It uses `TouchableOpacity` in ios and `TouchableNativeFeedback` on android.
 *
 * @param {BtnProps} props - Props supported by native touchable used in here and
 *                           few custom props.
 */
const Button: FC<BtnProps> = props => {
  const { styles, label, labelStyle, outline, ...touchableProps } = props;

  const touchableStyle = [
    styles.default,
    outline ? styles.outline : styles.normal,
    touchableProps.style,
  ];

  let touchContent = props.children;
  if (label) {
    touchContent = <Text style={labelStyle}>{label}</Text>;
  }

  return (
    <Touchable {...defaultProps} {...touchableProps} style={touchableStyle}>
      {touchContent}
    </Touchable>
  );
};

export default withStyle<BtnProps>(Button, defaultStyles);
