import { registerRootComponent } from 'expo';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#EEEFA8',
    width: '100%',
    height: '100%'
  }
});

registerRootComponent(App);

export default App;
