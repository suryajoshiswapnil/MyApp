import React, { FC } from 'react';

import { StyleSheet, Platform } from 'react-native';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';

const styles = StyleSheet.create({
  default: {
    fontFamily: Platform.select({
      ios: 'Avenir Next',
      android: 'Roboto',
    }),
  },
});

/**
 * Text - Custom text component using native `Text` component
 *        with default styles
 * @param {NativeTextProps} props - props for text component
 */
const Text: FC<NativeTextProps> = props => {
  return (
    <NativeText style={[styles.default, props.style]}>
      {props.children}
    </NativeText>
  );
};

export default Text;
