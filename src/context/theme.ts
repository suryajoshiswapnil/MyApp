/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React from 'react';

//TODO: Find another way to get type information
import colors from '../constant/color';

const ThemeContext = React.createContext({
  mode: 'light',
  colors: colors,
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
