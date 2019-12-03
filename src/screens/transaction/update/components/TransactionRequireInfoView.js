import React from 'react';
import {View, StyleSheet} from 'react-native';
import { SBTextInput, SBButton } from '../../../../components/SBComponent';
import { colors } from '../../../../utils/color';
import { SCREEN_WIDTH } from '../../../../utils/const';
import NavigationService from '../../../../navigator/NavigationService';

export default TransactionRequireInfoView = (props) => {

    const onSplitPress = () => {
        NavigationService.navigate('SplitTransaction');
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.image} />
                <SBTextInput style={styles.textInput} placeholder='Mô tả' />
            </View>
            <View style={[styles.row, {marginTop: 10}]}>
                <View style={styles.image} />
                <SBTextInput style={styles.textInput} placeholder='Giá tiền' />
            </View>
            <SBButton onPress={onSplitPress} buttonText='BẠN TRẢ VÀ CHIA ĐỀU' buttonStyle={{ height: 30, marginTop: 10 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        backgroundColor: colors.block,
    },
    row: {
        flexDirection: 'row'
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 3, 
        backgroundColor: 'white', 
        marginRight: 10,
    },
    textInput: {
        width: SCREEN_WIDTH - 90 
    }
})