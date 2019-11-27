import React, { useState,useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { colors } from '../../../utils/color';
import { SBHeader, SBBlockLine } from "../../../components/SBComponent";
import { FONT_FAMILY, PAY_TYPE_TEXT, PAY_TYPE } from '../../../utils/const';
import Utils from '../../../utils/utils';
import PayerItem from './components/PayerItem';

export const TransactionDetailScreen = (props) => {
    const onBackPress = () => {
        props.navigation.goBack();
    }
    return(
        <SafeAreaView style={styles.container}>
            <SBHeader onLeftPress={onBackPress} />
            <View style={styles.transactioInfoContainer}>
                <View style={{flexDirection: 'row', }}>
                    <View style={styles.transactionImage}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.transactionName}>Ăn trưa</Text>
                        <Text style={styles.transactionPrice}>{Utils.formatMoney(5000000, 0, 'đ', ',', '.')}</Text>
                        <Text style={styles.transactionDate}>Tạo bởi bạn vào 10/102019</Text>
                        <Text style={styles.transactionDate}>Sửa lần cuối vào 12/10/2019</Text>
                    </View>
                </View>
                <View style={styles.transactionBill}/>
            </View>
            <View>
                <SBBlockLine text={'CHI TIẾT'} />
                <PayerItem payerName={'Bạn'} paidPrice={5000000} payType={PAY_TYPE.LENT} payTypePrice={2500000}/>
                <PayerItem payerName={'Hoàng Nam'} paidPrice={0} payType={PAY_TYPE.OWE} payTypePrice={2500000}/>
            </View>
            <View style={{marginTop: 10}}>
                <SBBlockLine text={'CHÚ THÍCH'} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    },
    transactioInfoContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    transactionImage: {
        width: 40, 
        height: 40, 
        borderRadius: 3, 
        backgroundColor: 'white'
    },
    transactionName: {
        fontFamily: FONT_FAMILY,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors.white
    },
    transactionPrice: {
        fontFamily: FONT_FAMILY,
        fontSize: 22,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors.white
    },
    transactionDate: {
        fontFamily: FONT_FAMILY,
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors.white
    },
    transactionBill: {
        width: 70,
        borderRadius: 4, 
        backgroundColor: 'white'
    },

})