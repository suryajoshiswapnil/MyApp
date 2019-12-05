import React, { ElementType } from 'react';

const ThemeContext = React.createContext({
  mode: 'light',
  colors: {
    primary: '#222831',
    accent: '#00adb5',
    background: '#1d4d4f',
    disabled: '#dff6f0',
    surface: '#357376',
    placeholder: '#eeeeee',
    text: '#eeeeee',
    backdrop: '#393e46',
  },
});

export const Provider = ThemeContext.Provider;
export const Consumer = ThemeContext.Consumer;

export default ThemeContext;
