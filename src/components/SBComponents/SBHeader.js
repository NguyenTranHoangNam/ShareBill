import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native';
import Utils from '../../utils/utils';
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from '../../utils/color';
import { SBIconFont } from '../SBComponent';
import { FONT_FAMILY, SCREEN_WIDTH } from '../../utils/const';

const Header = (props) => {
    const { leftIconName = null, leftText = null, onLeftPress, rightIconName = null, rightText = null, onRightPress, title = '' } = props;

    const getLeftIcon = () => {
        if (leftIconName) {
            return leftIconName
        }
        if (Utils.isAndroid()) {
            return 'arrow-back'
        }
        return 'chevron-left'
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
                <Text style={styles.title}>{title}</Text>
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

export default SBHeader = (props) => {
    const { type = 'screen', tabTitle, icons = [], onIconPress } = props;
    
    if (type === 'tab'){
        return (
            <View style={styles.menuStyles}>
                <Text style={styles.tabTitle}>{tabTitle}</Text>
                <View style={styles.row}>
                    {icons.map((icon, index) => {
                        return (
                            <TouchableOpacity onPress={() => onIconPress(index)} style={styles.icon}>
                                <SBIconFont name={icon} size={20} color={colors.background}/>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
    return (
        <Header {...props} />
    )

}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: Utils.isAndroid() ? 62 : (Utils.isiPhoneX() ? 64 : 45),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
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
    },
    title: {
        fontFamily: FONT_FAMILY,
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors.white
    },
    menuStyles: {
        height: 47,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tabTitle: {
        fontFamily: FONT_FAMILY,
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: colors.white
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: colors.white_70,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    row: {
        flexDirection: 'row'
    }
})