import React from 'react';
import SimpleButton from '../components/SimpleButton';
import styleCommon from '../styles/StylesCommon';
import { StyleSheet, Text, View } from "react-native";

const LoginScreen = (props) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            display: props.display? 'flex' : 'none',
        },
        logo: {
            height: '60%',
            width: '100%',
        },
        buttonCombo: {
            width: '100%'
        },
        testText: {
            fontSize: 50
        }
    })

    return (
        <View style={[styles.container, styleCommon.flexCenter, styleCommon.fillParent]}>
            <View style={[styles.logo, styleCommon.flexCenter]}>
                <Text style={styles.testText}>LOGO HERE</Text>
            </View>
            <View style={[styles.buttonCombo, styleCommon.flexCenter]}>
                <SimpleButton width='60%' height='20%' title='Login' color='#FAFDF6' backgroundColor='#2D2A32' />
                <SimpleButton width='60%' height='20%' title='Signup' color='#FAFDF6' backgroundColor='#2D2A32' />
            </View>
        </View>
    )
}

export default LoginScreen;