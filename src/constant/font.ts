/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import { font } from '../util';
import { device } from '../constant';

// font mapping object
const fontSizes = [
  { size: 10, name: ['xs', 'xSmall'] },
  { size: 12, name: ['sm', 'small'] },
  { size: 14, name: ['md', 'medium'] },
  { size: 16, name: ['lg', 'large'] },
  { size: 18, name: ['xl', 'xLarge'] },
];

/**
 * Fonts to be used in the app, has fontFamily defined according to
 * device os, for android it's `Roboto` and `Avenir Next` in ios.
 */
const fonts: any = {
  family: device.isAndroid ? 'Roboto' : 'Avenir Next',
  size: font.createFontSize(fontSizes),
};

export default fonts;
