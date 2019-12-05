import React, { useContext } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import RootApp from './src';
import config from './src/config';

import { Provider as ThemeProvider } from './src/context/theme';

const appConfig = config();

const App = () => {
  return (
    <ThemeProvider value={appConfig.theme}>
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <RootApp />
        </SafeAreaView>
      </>
    </ThemeProvider>
  );
};

export default App;
