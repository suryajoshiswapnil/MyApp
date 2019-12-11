/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React, { ElementType } from 'react';
import { Consumer as ThemeConsumer } from '../../context/theme';

const withTheme = (Component: ElementType) => {
  return (
    <ThemeConsumer>
      {({ mode, colors }) => {
        return <Component mode={mode} colors={colors} />;
      }}
    </ThemeConsumer>
  );
};

export default withTheme;
