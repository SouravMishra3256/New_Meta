/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Logo from '../assets/Logo.svg';
 import BlobBackground from '../assets/BlobBackground.svg';
 import {
     SafeAreaView,
     StyleSheet,
     Text,
     View,
     TextInput
 } from 'react-native';
 
 const LoginPage = () => {
     return (
         <>
             <SafeAreaView style={{
                 backgroundColor: "#131315"
                }}>
             </SafeAreaView>
             <View style={styles.container}>   
                <BlobBackground height={805} style={{
                    position: 'absolute',
                }}/>              
                <View style={{
                   borderWidth: 3,
                   border: 'solid',
                   borderColor: '#CCCCCC',
                   borderRadius: 180,
                   marginBottom: 0,
                   padding: 10,
                }}>
                    <Logo 
                        height={200} 
                        width={200} 
                        style={{
                            opacity: 1,
                        }}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={"E-Mail"}
                />
             </View>
         </>
     );
    };
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#131315',
            alignItems: 'center',
            justifyContent: 'center'
        },

        input: {
            margin: 12,
            backgroundColor: '#e1e1e5',
            borderWidth: 1,
            borderColor: '#e1e1e5',
            borderRadius: 20,
            paddingLeft: 15,
            width: '80%',
            height: '8%',
            fontSize: 20,
            color: '#e1e1e5',
        },
    });
    
    export default LoginPage;
    
    // border-radius: 30% 70% 28% 72% / 66% 64% 36% 34%;

    {/* <BlobLogin height={350} width={350}/> */}