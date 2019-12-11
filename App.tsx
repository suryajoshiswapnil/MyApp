/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import RootApp from './src';
import config from './src/config';

import { Provider as ThemeProvider } from './src/context/theme';

const appConfig = config();
const App = () => {
  const containerStyle = {
    flex: 1,
    backgroundColor: appConfig.theme.colors.background,
  };

  return (
    <ThemeProvider value={appConfig.theme}>
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={containerStyle}>
          <RootApp />
        </SafeAreaView>
      </>
    </ThemeProvider>
  );
};

export default App;
