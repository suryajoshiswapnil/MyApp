import colors from './colors';

interface Options {
  // Something in here
}

/**
 * Configure app
 * @param {Options} opts  - Options to be passed.
 */
const config = (opts: Options) => {
  return {
    name: 'MyApp',
    author: {
      name: 'Swapnil',
      email: 'swapnil.suryajoshi@gmail.com',
    },
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
  };
};

export default config;
