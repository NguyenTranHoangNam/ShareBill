import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/color';
import Avatar from './Avatar';
import { FONT_FAMILY } from '../utils/const';

export default TabSummary = ({}) => {
    return (
        <View style={{paddingHorizontal: 10, marginVertical: 15}}>
            <View style={styles.container}>
                <Avatar size={60} name={'S'} />
                <View style={styles.summaryContainer}>
                    <Text style={[styles.summaryInfo, {fontWeight: 'bold', fontSize: 15 }]}>TỔNG SỐ DƯ</Text>
                    <Text style={[styles.summaryInfo, { color: colors.orange }]}>
                        Bạn nợ: 5.000.000đ
                    </Text>
                    <Text style={[styles.summaryInfo, { color: colors.mainLight }]}>
                        Bạn cho mượn: 5.000.000đ
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 20,
        backgroundColor: colors.block,
    },
    summaryContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    summaryInfo: {
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        fontWeight: '500',
        fontStyle: "normal",
        color: colors.white
    }
})