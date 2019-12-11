/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React, { ComponentType as CType } from 'react';
import { Consumer as ThemeConsumer } from '../context/theme';

interface WTProps {
  mode: string;
  colors: any;
}

/**
 * Adds in theme information to component props, that will the component will
 * use to render UI according to theme selected.
 *
 * @param Component - a react component to enhance to get theme info.
 */
const withTheme = <T extends WTProps>(Component: CType<T>) => {
  return (props: Omit<T, keyof WTProps>) => (
    <ThemeConsumer>
      {({ mode, colors }) => {
        return <Component mode={mode} colors={colors} {...(props as T)} />;
      }}
    </ThemeConsumer>
  );
};

export default withTheme;
