/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import { Platform } from 'react-native';

/**
 * TODO: Need to research on the template structure so that we can derive types
 * or key present in the template and it would be better to get suggestions on
 * font sizes. Hence not in use.
 */
const fontTemplate = [
  {
    alias: ['xxs', 'xxSmall'],
    size: 10,
  },
  {
    alias: ['xxs', 'xxSmall'],
    size: 10,
  },
  {
    alias: ['xxs', 'xxSmall'],
    size: 10,
  },
  {
    alias: ['xxs', 'xxSmall'],
    size: 10,
  },
  {
    alias: ['xxs', 'xxSmall'],
    size: 10,
  },
  {
    alias: ['xxs', 'xxSmall'],
    size: 10,
  },
];

interface FontObject {
  alias: Array<string>;
  size: number;
  scale?: () => void; // TODO: Introduce scaling functions for responsive fonts
}
/**
 * Create font object/size from an array of font objects which consist of font alias
 * and corresponding font sizes.
 * TODO: Add scaling factor to introduce responsive font sizes in app. [ NOT IN USE ]
 *
 * @param {FontObject} fontObject - An array of font names and sizes from which font
 *                                  object is created
 */
const createFontSize = (fontObject: Array<FontObject>) => {
  const result: { [key: string]: number } = {};

  fontObject.forEach(fontItem => {
    fontItem.alias.forEach(fontName => {
      result[fontName] = fontItem.size;
    });
  });

  return result;
};

/**
 * Fonts to be used in the app, has fontFamily defined according to
 * device os, for android it's `Roboto` and `Avenir Next` in ios.
 */
const typography = {
  family: Platform.select({
    android: 'Roboto',
    ios: 'Avenir Next',
  }),
  size: {
    xxs: 8,
    xs: 10,
    sm: 12,
    md: 15,
    lg: 18,
    xl: 20,
    xxl: 22,
    // Add custom fonts below this line
    h1: 30,
  },
};

export default typography;
