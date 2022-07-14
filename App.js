/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Logo from './assets/Logo.svg';
import Finger from './assets/Finger.svg';
import MetaLogo from './assets/MetaLogo.svg';
import SplashBlob from './assets/Splash_Blob.svg';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
} from 'react-native';

const App = () => {
    return ( <
        >
        <<
        <<
        << < HEAD <
        StatusBar animated = { true }
        backgroundColor = "#131315" / >
        <
        View style = { styles.container } >
        <
        Logo style = {
            {
                marginTop: 40,
                marginBottom: 40,
            }
        }
        height = { 350 }
        width = { 350 }
        />

        <
        Text style = { styles.text } > SELF < /Text> <
        Text style = { styles.text } > SOVEREIGN < /Text> <
        Text style = { styles.text } > IDENTITY < /Text> < /
        View > ===
        ===
        = <
        SafeAreaView style = {
            {
                backgroundColor: "#131315"
            }
        } >
        <
        /SafeAreaView> <
        View style = { styles.container } >
        <
        MetaLogo style = {
            {
                alignSelf: 'flex-start',
                marginLeft: 10
            }
        }
        height = { 50 }
        width = { 120 }
        /> <
        View style = {
            {
                borderWidth: 2,
                border: 'solid',
                borderColor: 'white',
                borderRadius: 180,
                marginTop: 100,
                marginBottom: 70,
                padding: 20
            }
        }

        >
        <
        Logo height = { 300 }
        width = { 300 }
        /> < /
        View > <
        View style = {
            {
                flex: 1,
                flexDirection: 'row'
            }
        } > { /* <Finger height={150} width={150}/> */ } <
        Image style = {
            {
                height: 160,
                width: 160
            }
        }
        source = { require('./assets/Finger.png') }
        /> <
        Text style = { styles.text } > SELF { '\n' }
        SOVEREIGN { '\n' }
        IDENTITY < /Text> < /
        View > <
        /View> >>> >>>
        > new <
        />
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
        <<
        <<
        << < HEAD
        fontWeight: '300',
        letterSpacing: 1,
        alignItems: 'center',
        fontFamily: 'Roboto-Black' ===
            ===
            =
            fontWeight: '600',
        >>>
        >>>
        > new
    },
});

export default App;