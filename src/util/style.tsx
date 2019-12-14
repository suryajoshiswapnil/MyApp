/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */

// TODO:
// 1. Add support to use function as a rawStyle.
// 2. Add support to let user pass Stylesheet created styles.
// 3. Fix Typescript issue.
// 4. Add in support to let Component know which styles object it has passed.

import React, { ComponentType as CType } from 'react';
import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native';

interface WSProps {
  styles: any;
}
type Props<T> = Omit<T, keyof WSProps>;
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
const withStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  rawStyles: T | NamedStyles<T>,
) => <CT extends WSProps>(Component: CType<CT>) => (props: Props<CT>) => {
  const styles = StyleSheet.create(rawStyles || {});
  return <Component {...(props as CT)} styles={styles} />;
};

/** An alias to use native Stylesheet create */
export const create = StyleSheet.create;

export default withStyle;

/** Old Implementation */
// const withStyle = <T extends WSProps>(Component: CType<T>, rawStyles: any) => {
//   return (props: Props<T>) => {
//     if (typeof rawStyles === 'function') {
//       rawStyles = rawStyles(constants, props);
//     }
//     /**
//      * Needed to cast `props` (`...(props as T)`) to overcome the bug mentioned
//      * in this issue. Please take a glance at it. If it's fixed make changes in
//      * here accordingly.
//      * https://github.com/Microsoft/TypeScript/issues/28938#issuecomment-450636046
//      */
//     return <Component styles={rawStyles} {...(props as T)} />;
//   };
// };
