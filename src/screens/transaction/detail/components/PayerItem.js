import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Utils from '../../../../utils/utils';
import { FONT_FAMILY, PAY_TYPE, PAY_TYPE_TEXT, PAY_TYPE_COLOR } from '../../../../utils/const';
import { colors } from '../../../../utils/color';

export default PayerItem = ({payerName, paidPrice = 0, payType = 1, payTypePrice = 0}) => {
    return (
        <View style={styles.container}>
            <View style={{width: 40, height: 40, borderRadius: 20, backgroundColor: 'white'}}/>
            <View style={styles.payTextContainer}>
                <Text style={styles.payText}>
                    <Text style={styles.payBoldText}>{payerName}</Text>
                    {paidPrice > 0 ?
                    <Text>
                        <Text> đã trả </Text>
                        <Text style={styles.payBoldText}>{Utils.formatMoney(paidPrice, 0, 'đ', ',', '.')}</Text>
                    </Text>
                    : null }
                    { payTypePrice > 0 ?
                    <Text style={styles.payText}>
                        {paidPrice > 0 ? <Text> và</Text> : null}
                        <Text> {payType === PAY_TYPE.LENT ? PAY_TYPE_TEXT.LENT : PAY_TYPE_TEXT.OWE}</Text>
                        <Text style={[styles.payBoldText, payType === PAY_TYPE.LENT ? {color: PAY_TYPE_COLOR.LENT} :  {color: PAY_TYPE_COLOR.OWE}]}> {Utils.formatMoney(payTypePrice, 0, 'đ', ',', '.')}</Text>
                    </Text>
                    : null }
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    payTextContainer: {
        marginLeft: 10,
    },
    payText: {
        fontFamily: FONT_FAMILY,
        fontSize: 16,
        fontStyle: "normal",
        color: colors.white
    },
    payBoldText: {
        fontWeight: "bold",
    }
})