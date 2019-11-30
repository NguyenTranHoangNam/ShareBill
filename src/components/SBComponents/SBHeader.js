import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform, Text} from 'react-native';
import Utils from '../../utils/utils';
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from '../../utils/color';
import { SBIconFont } from '../SBComponent';
import { FONT_FAMILY } from '../../utils/const';

export default SBHeader = ({leftIconName = null, leftText = null, onLeftPress, rightIconName = null, rightText = null, onRightPress, title = ''}) => {
    const getLeftIcon = () => {
        if (leftIconName) {
            return leftIconName
        }
        if (Utils.isAndroid()){
            return 'arrow-back'
        }
        return 'arrow-back-ios'
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
                {leftText ? 
                    <Text style={styles.headerText}>{leftText}</Text>
                :
                <SBIconFont name={getLeftIcon(leftIconName)} size={25} color={colors.white} />
                }
            </TouchableOpacity>
            <View>
                <Text>{title}</Text>
            </View>
            <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
                {rightText || rightIconName ? 
                    rightText ?
                        <Text style={styles.headerText}>{rightText}</Text>
                    :
                        <SBIconFont name={(rightIconName)} size={20} color={colors.white} />
                : 
                    null
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Utils.isAndroid() ? 62 : (Utils.isiPhoneX() ? 64 : 45),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingLeft: (Platform.OS == 'ios' ? 12 : 16),
        paddingRight: (Platform.OS == 'ios' ? 12 : 16),
    },
    iconContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: FONT_FAMILY,
        fontSize: 12,
        fontWeight: "300",
        fontStyle: "normal",
        textAlign: "right",
        color: colors.white
    }
})