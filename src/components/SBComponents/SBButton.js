import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/color';
import { BORDER_WIDTH, FONT_FAMILY } from '../../utils/const';

export default SBButton = ({borderOnly, roundVertical, buttonStyle, disabled, textStyle, buttonText, ...props}) => {
    return (
        <TouchableOpacity
            {...props}
            style={[styles.buttonWrapper, borderOnly ? styles.buttonBorderWrapper : null, roundVertical ? styles.roundVerticalStyle : null, {...buttonStyle}, disabled ? {backgroundColor: colors.disable} : null]}>
            <Text style={[styles.buttonText, borderOnly ? styles.borderOnlyText : null, {...textStyle}]}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roundVerticalStyle: {
        borderRadius: 20
    },
    buttonBorderWrapper: {
        borderColor: colors.mainLight,
        borderWidth: BORDER_WIDTH,
        backgroundColor: 'transparent',
    },
    buttonWrapper: {
        backgroundColor: colors.main,
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    borderOnlyText: {
        color: colors.mainLight
    },
    buttonText: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        textAlign: "center",
        color: colors.white
    }
})