/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import React, { FC } from 'react';

import NavigatorApp from './src';
import config from './src/config';

import { SafeAreaView } from 'react-native';
import { ThemeProvider, ConfigProvider, ThemeConsumer } from './src/context';
import { withTheme } from 'src/util';

const App = () => {
  return (
    <ConfigProvider value={config}>
      <ThemeProvider value={config.theme}>
        <ThemeConsumer>
          {({ colors }) => {
            return (
              <SafeAreaView
                style={{ flex: 1, backgroundColor: colors.background }}>
                <NavigatorApp />
              </SafeAreaView>
            );
          }}
        </ThemeConsumer>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
