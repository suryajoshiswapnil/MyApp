import React, { ElementType } from 'react';

const ThemeContext = React.createContext({
  mode: 'light',
  colors: {},
});

export const Provider = ThemeContext.Provider;
export const Consumer = ThemeContext.Consumer;

export default ThemeContext;
