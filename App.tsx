import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import RootApp from './src';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <RootApp pageTitle={'Login'} />
      </SafeAreaView>
    </>
  );
};

export default App;
