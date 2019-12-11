/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import { colors, device, fonts } from '../constant';

interface Options {
  allowFontScaling?: boolean;
}

const defaultOptions: Options = {
  allowFontScaling: false,
};

/**
 * App Config - Values to be used in app.
 */
const config = (opts = defaultOptions) => {
  return {
    name: 'MyApp',
    author: {
      name: 'Swapnil Suryajoshi',
      email: 'swapnil.suryajoshi@gmail.com',
    },
    os: device.OS,
    api: {
      dev: 'localhost:3001/api/',
      prod: 'localhost:3001/api/',
    },
    log: {
      level: 0,
      disableWarnings: false,
    },
    theme: {
      mode: 'light',
      colors,
    },
    font: {
      allowScaling: opts.allowFontScaling,
      family: {
        android: 'Roboto',
        ios: 'Avenir Next',
      },
      size: [],
    },
  };
};

export default config;
