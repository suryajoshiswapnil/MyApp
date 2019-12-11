/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import RootApp from './src';
import config from './src/config';

import { Provider as ThemeProvider } from './src/context';

const appConfig = config();
const App = () => {
  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <ThemeProvider value={appConfig.theme}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: appConfig.theme.colors.background }}>
        <RootApp />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
