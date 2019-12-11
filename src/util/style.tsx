/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React, { ComponentType as CType } from 'react';
import { StyleSheet } from 'react-native';

import * as constants from '../constant';

interface WSProps {
  styles: any;
}
type RawStylesType = ((c: typeof constants) => object) | object;

/**
 * Add styles to component, that can be accessed through `styles` props on component,
 * it also gives facilitates to provide function as a styles which will then returns
 * a style object.
 *
 * @param Component - A react component to enhance
 * @param rawStyles - A styles object either passed as a object or returned from
 *                    a function that will be used used to create styles and pass
 *                    it through props to `Component` provided.
 */
const withStyles = <T extends WSProps>(
  Component: CType<T>,
  rawStyles: RawStylesType = {},
) => {
  return (props: Omit<T, keyof WSProps>) => {
    if (typeof rawStyles === 'function') {
      rawStyles = rawStyles(constants);
    }
    const styles = StyleSheet.create(rawStyles);

    /**
     * Needed to cast `props` (`...(props as T)`) to overcome the bug mentioned
     * in this issue. Please take a glance at it. If it's fixed make changes in
     * here accordingly.
     * https://github.com/Microsoft/TypeScript/issues/28938#issuecomment-450636046
     */
    return <Component styles={styles} {...(props as T)} />;
  };
};

export default withStyles;
