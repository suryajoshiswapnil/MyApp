import React, { ElementType } from 'react';
import { Consumer as ThemeConsumer } from '../../context/theme';

export const withTheme = (Component: ElementType) => {
  return (
    <ThemeConsumer>
      {({ mode, colors }) => {
        return <Component mode={mode} colors={colors} />;
      }}
    </ThemeConsumer>
  );
};
