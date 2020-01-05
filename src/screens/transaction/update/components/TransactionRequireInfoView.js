import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { SBTextInput, SBButton } from '../../../../components/SBComponent';
import { colors } from '../../../../utils/color';
import { SCREEN_WIDTH } from '../../../../utils/const';
import NavigationService from '../../../../navigator/NavigationService';
import Utils from '../../../../utils/utils';

export default TransactionRequireInfoView = ({transaction}) => {
    const [trans, setTrans] = useState(transaction);

    const onSplitPress = () => {
        NavigationService.navigate('SplitTransaction');
    }

    console.log('trans', trans);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.image} />
                <SBTextInput style={styles.textInput} value={trans.description} placeholder='Mô tả' />
            </View>
            <View style={[styles.row, {marginTop: 10}]}>
                <View style={styles.image} />
                <SBTextInput style={styles.textInput} value={Utils.formatMoney(trans.amount, 0, 'đ')} placeholder='Giá tiền' />
            </View>
            <SBButton onPress={onSplitPress} buttonText={Utils.getPayTypeText({payType: trans.payType, payers: trans.payers})} buttonStyle={{ height: 30, marginTop: 10 }} />
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