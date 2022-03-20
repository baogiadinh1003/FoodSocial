import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import styleCommon from '../styles/StylesCommon';

const SimpleButton = (props) => {
    const styles = StyleSheet.create({
        simpleButton: {
            height: props.height,
            width: props.width,
            marginTop: -50
        },
        textColor: {
            color: props.color,
            fontSize: 20,
        },
        buttonStyle: {
            borderColor: '#000',
            height: props.height,
            width: props.width,
            backgroundColor: props.backgroundColor || "#FFFFFF",
            borderRadius: 50,
        }
    })

    return (
        <View style={[styleCommon.fillParent, styles.simpleButton, styleCommon.flexCenter]}>
            <TouchableOpacity title={props.title} style={[styles.buttonStyle, styleCommon.flexCenter]}>
                <Text style={styles.textColor}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SimpleButton;