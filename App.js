/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Logo from './assets/Logo.svg';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#131315" />
      <View style={styles.container}>
        <Logo
          style={{
            marginTop: 40,
            marginBottom: 40,
          }}
          height={350}
          width={350}
        />

        <Text style={styles.text}>SELF</Text>
        <Text style={styles.text}>SOVEREIGN</Text>
        <Text style={styles.text}>IDENTITY</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131315',
    alignItems: 'center',
  },
  text: {
    color: '#e6e6e6',
    fontSize: 40,
    fontWeight: '300',
    letterSpacing: 1,
    alignItems: 'center',
    fontFamily: 'Roboto-Black'
  },
});

export default App;
