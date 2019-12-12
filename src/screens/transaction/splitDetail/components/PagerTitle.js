import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { colors } from '../../../../utils/color';
import { BORDER_WIDTH, FONT_FAMILY } from '../../../../utils/const';

export default PagerTitle = ({tabIndex = 0}) => {
    if (tabIndex === 0){
        return (
            <View>
                <Text style={styles.viewPagerTitle}>CHIA ĐỀU</Text>
            </View>
        )
    }
    if (tabIndex === 1){
        return (
            <View>
                <Text style={styles.viewPagerTitle}>CHIA THEO SỐ TIỀN CHÍNH XÁC</Text>
            </View>
        )
    }
    if (tabIndex === 2){
        return (
            <View>
                <Text style={styles.viewPagerTitle}>CHIA THEO PHẦN TRĂM</Text>
            </View>
        )
    }
    if (tabIndex === 3){
        return (
            <View>
                <Text style={styles.viewPagerTitle}>CHIA THEO CÁC PHẦN</Text>
            </View>
        )
    }
    return (
        <View>
            <Text style={styles.viewPagerTitle}>CHIA THEO ĐIỀU CHỈNH</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    viewPagerTitle: {
        marginTop: 15,
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors.white,
        marginVertical: 10,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    pagerSummaryContainer: {
        height: 50, 
        paddingVertical: 10, 
        backgroundColor: colors.block,
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    summaryLeftContainer: {
        flex: 0.75, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    summaryRightContainer: {
        flex: 0.25, 
        alignItems: 'center',
        justifyContent: 'center', 
        borderLeftWidth: BORDER_WIDTH, 
        borderLeftColor: colors.subTitle, 
        flexDirection: 'row'
    },
    summaryTilte: {
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        color: colors.white,
        fontWeight: 'bold'
    },
})