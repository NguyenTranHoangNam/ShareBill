import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/color';
import { BORDER_WIDTH, FONT_FAMILY } from '../../utils/const';

export default SBButton = (props) => {
    return (
        <TouchableOpacity
            {...props}
            style={[styles.buttonWrapper, props.borderOnly ? styles.buttonBorderWrapper : null, props.roundVertical ? styles.roundVerticalStyle : null, {...props.buttonStyle}, props.disabled ? {backgroundColor: colors.disable} : null]}>
            <Text style={[styles.buttonText, props.borderOnly ? styles.borderOnlyText : null, {...props.textStyle}]}>
                {props.buttonText}
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