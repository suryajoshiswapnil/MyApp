/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import { colors, typography, device } from '../constant';

/**
 * App config file to be used throughout the app. It will be available to app pages or
 * components that needed it using context api. ConfigProvider would hold all such data
 * and updated can be updated.
 */
const config = {
  name: 'MyApp',
  version: '1.0.0',
  author: {
    name: 'Swapnil Suryajoshi',
    email: 'swapnil.suryajoshi@gmail.com',
  },
  api: {
    dev: 'localhost:3001/api/',
    prod: 'localhost:3001/api/',
  },
  theme: {
    mode: 'light',
    colors: colors,
  },
  device: device,
  typography: typography,
};

export default config;
