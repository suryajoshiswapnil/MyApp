/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React, { FC } from 'react';

import { StyleSheet, Platform } from 'react-native';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';

import { fonts } from '../../../constant';

const styles = StyleSheet.create({
  default: {
    fontFamily: fonts.family,
    fontSize: fonts.size.md,
  },
});

/**
 * Text - Custom text component using native `Text` component
 * with default styles
 *
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
