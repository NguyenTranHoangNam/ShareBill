import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import { colors } from '../../utils/color';
import { BORDER_WIDTH } from '../../utils/const';

export default SBTextInput = (props) => {
    return (
        <TextInput 
            {...props}
            style={[styles.textInputStyle, {...props.style}]}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={colors.subTitle}
        />
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: '100%',
        height: 40,
        borderBottomColor: colors.lineForm,
        borderBottomWidth: BORDER_WIDTH,
        color: colors.white,
    }
})