/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */

// TODO:
// 1. Fix Typescript issue.
// 2. Add in support to let Component know which styles object it has passed.
import React, { ComponentType as CType } from 'react';
import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native';

import { ThemeType } from '../constant';
import { ThemeConsumer } from '../context';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

/**
 * Add styles to component, that can be accessed through `styles` props on component,
 * it also gives facilitates to provide function as a styles which will then returns
 * a style object.
 * @param rawStyles - A styles object either passed as a object or returned from
 *                    a function that will be used used to create styles and pass
 *                    it through props to `Component` provided.
 * @param Component - A react component to enhance
 */
const withStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  rawStyles: T | ((theme: ThemeType) => T),
) => {
  return <CT extends { styles: T | NamedStyles<T> }>(Component: CType<CT>) => {
    return (props: Omit<CT, 'styles'>) => {
      return (
        <ThemeConsumer>
          {themeValue => {
            if (typeof rawStyles === 'function') {
              rawStyles = rawStyles(themeValue as ThemeType);
            }
            // https://github.com/Microsoft/TypeScript/issues/28938#issuecomment-450636046
            return <Component styles={rawStyles} {...(props as CT)} />;
          }}
        </ThemeConsumer>
      );
    };
  };
};

const withStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  rawStyles: T,
) => <CT extends { styles: T | NamedStyles<T> }>(Component: CType<CT>) => (
  props: Omit<CT, 'styles'>,
) => {
  const styles = StyleSheet.create(rawStyles || {});
  return <Component styles={styles} {...(props as CT)} />;
};

export const create = StyleSheet.create; /** An alias to native Stylesheet */

export default withStyles;
