/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import { Platform, Dimensions } from 'react-native';

/** Get the device dimensions */
const dimensions = Dimensions.get('window');

/**
 * Device properties - includes device OS, has boolean for android
 * and ios. device dimension (width and height) and other device related
 * stuff can be added here,
 */
const device = {
  os: Platform.OS,

  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',

  width: dimensions.width,
  height: dimensions.height,
};

export default device;
