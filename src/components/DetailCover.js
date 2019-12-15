import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import { SBButton } from './SBComponent';
import { colors } from '../utils/color';
import { FONT_FAMILY, SCREEN_WIDTH } from '../utils/const';

export default DetailCover = ({name, info, children}) => {
    return (
        <View style={styles.container}>
            <Avatar name={name} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.info}>Bạn nợ <Text style={[styles.info, { color: colors.orange }]}>500.000đ</Text></Text>
            <View style={styles.blockButton}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center'
    },
    name: {
        marginTop: 10,
        fontFamily: FONT_FAMILY,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: colors.white
    },
    info: {
        fontFamily: FONT_FAMILY,
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: colors.white,
        marginTop: 5
    },
    blockButton: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: SCREEN_WIDTH,
        marginTop: 15
    },
})