/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */

/**
 * Color Pallet -  various colors used throughout different elements.
 *                  https://callstack.github.io/react-native-paper/theming.html
 *
 * primary      -  primary color for your app, usually your brand color.
 * accent       -  secondary color for your app which complements the primary color.
 * background   -  background color for pages, such as lists.
 * surface      -  background color for elements containing content, such as cards.
 * text         -  text color for content.
 * disabled     -  color for disabled elements.
 * placeholder  -  color for placeholder text, such as input placeholder.
 * backdrop     -  color for backdrops of various components such as modals.
 */
const colors = {
  primary: '#222831',
  accent: '#00adb5',
  background: '#1d4d4f',
  disabled: '#dff6f0',
  surface: '#357376',
  placeholder: '#eeeeee',
  text: '#eeeeee',
  backdrop: '#393e46',
};

export default colors;

export type ColorType = typeof colors;
