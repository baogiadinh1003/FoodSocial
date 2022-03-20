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
    backgroundColor: '#EEEFA8'
  }
});

export default App;
