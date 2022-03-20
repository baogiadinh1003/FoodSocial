import React from "react";
import { StyleSheet, Button, View } from "react-native";
import styleCommon from '../styles/StylesCommon';

const SimpleButton = (props) => {
    const styles = StyleSheet.create({
        simpleButton: {
            height: props.height,
            width: props.width,
            backgroundColor: props.backgroundColor || "#FFFFFF",
            borderRadius: 50,
            margin: 4,
            fontSize: 12
        }
    })

    return (
        <View style={[styleCommon.flexCenter, styles.simpleButton]}>
            <Button title={props.title} color={props.color}>
                {props.title}
            </Button>
        </View>
    );
}

export default SimpleButton;