import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/color';
import { FONT_FAMILY } from '../../utils/const';

export default SBBlockLine = (props) => {
    return (
        <View style={styles.blockLine}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    blockLine: {
        height: 20, 
        backgroundColor: colors.block,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    text: {
        fontFamily: FONT_FAMILY,
        fontSize: 11,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors.white
    }
})