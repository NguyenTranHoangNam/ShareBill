import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { colors } from '../../../../utils/color';
import { SBIconFont } from '../../../../components/SBComponent';
import { BORDER_WIDTH } from '../../../../utils/const';

export const TransactionImageView = ({}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <SBIconFont name='image' size={30} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TouchableOpacity style={styles.iconContainer}>
                <SBIconFont name='camera' size={30} color={colors.white} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45, 
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.block, 
        marginTop: 15, 
        alignItems: 'center' 
    },
    iconContainer: {
        height: 45,
        flex: 0.5, 
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10 
    },
    verticalLine: {
        width: BORDER_WIDTH, 
        height: 40, 
        backgroundColor: colors.subTitle 
    }
})