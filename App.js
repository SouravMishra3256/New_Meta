/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Logo from './assets/Logo.svg'
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
    <SafeAreaView style={{
      backgroundColor: "#131315"
    }}>
    </SafeAreaView>
    <View style={styles.container}>
      <Logo style={{
        marginTop: 40,
        marginBottom: 40
      }}
      height={300} 
      width={300} 
      />
      
      <Text style={styles.text}>Self</Text>
      <Text style={styles.text}>Sovereign</Text>
      <Text style={styles.text}>Identity</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131315',
    alignItems: 'center',
  },
  text: {
    color: '#e6e6e6',
    fontSize: 40,
    // fontWeight: '100',
    letterSpacing: 1,
    alignItems: 'center',
    fontFamily: 'Roboto-Black'
  },
})

export default App;
