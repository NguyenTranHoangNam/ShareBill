import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import { SBIconFont } from './SBComponent';
import { colors } from '../utils/color';
import { FONT_FAMILY, BORDER_WIDTH } from '../utils/const';

export default TouchableListItem = ({ title, subTitle, index, onPress, children }) => {
    return (
        <TouchableOpacity style={[styles.container, index !== 0 ? {borderTopColor: colors.line, borderTopWidth: BORDER_WIDTH} : null]} onPress={onPress}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Avatar name={title} size={50} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {subTitle
                        ?
                        <Text style={styles.subTitle}>{subTitle}</Text>
                        :
                        <View style={styles.subTitleContainer}>
                            {children}
                        </View>
                    }
                </View>
            </View>
            <SBIconFont style={styles.arrowIcon} name={'chevron-right'} size={25} color={colors.white} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingRight: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleContainer: {
        justifyContent: 'space-between',
        marginLeft: 15,
    },
    title: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: "normal",
        letterSpacing: 0,
        color: colors.white
    },
    subTitleContainer: {

    },
    subTitle: {
        fontFamily: FONT_FAMILY,
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors.subTitle
    },
    arrowIcon: {

    }
})