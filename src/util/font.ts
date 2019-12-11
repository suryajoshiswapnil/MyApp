/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */

// types for the fontMapping object
interface Font {
  size: number;
  name: Array<string>;
  scale?: (size: number) => number;
}
// An array of `Font`
type Fonts = Array<Font>;

/**
 * Construct a font size object containing fontName with its alias
 * as given in the above font name mapping. Here in the above object
 * the specifies the `fontSize` and the value indicates the key names
 * used fot this specific size.
 *
 * @param {Fonts} fontMap - A font mapping object.
 */
const createFontSize = (fontMap: Fonts) => {
  const fontSize = fontMap.reduce((acc: any, font) => {
    const { name: fontNames, size, scale } = font;
    fontNames.forEach(key => {
      acc[key] = size;
    });
    return acc;
  }, {});

  return fontSize;
};

export default {
  createFontSize,
};
