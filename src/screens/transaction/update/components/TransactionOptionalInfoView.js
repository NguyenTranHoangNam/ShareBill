import React from 'react';
import {View, StyleSheet} from 'react-native';
import { SBTextInput } from '../../../../components/SBComponent';
import { colors } from '../../../../utils/color';
import { SCREEN_WIDTH } from '../../../../utils/const';

export default TransactionOptionalInfoView = ({}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.iconContainer}>
                    <SBIconFont name='today' size={30} color={colors.white} />
                </View>
                <SBTextInput style={{ width: SCREEN_WIDTH - 90 }} placeholder='HÔM NAY' />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={[styles.iconContainer, {borderRadius: 20, backgroundColor: 'white'}]}/>
                <SBTextInput style={{ width: SCREEN_WIDTH - 90 }} placeholder='TÊN NHÓM' />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={styles.iconContainer}>
                    <SBIconFont name='note-add' size={30} color={colors.white} />
                </View>
                <SBTextInput style={styles.textInput} placeholder='Ghi chú' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.block,
        marginTop: 15,
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center', 
        justifyContent: 'center', 
        marginRight: 10
    },
    textInput: {
        width: SCREEN_WIDTH - 90,
    }
})