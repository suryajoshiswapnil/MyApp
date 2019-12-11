/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React from 'react';
import { colors, fonts } from '../../constant';

const ThemeContext = React.createContext({
  mode: 'light',
  colors,
});

export const Provider = ThemeContext.Provider;
export const Consumer = ThemeContext.Consumer;

export default ThemeContext;
