import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SCREEN_WIDTH, FONT_FAMILY } from '../../../../utils/const';
import { colors } from '../../../../utils/color';
import { defineValue } from '../../../../utils/defineValue';
import Avatar from '../../../../components/Avatar';

export default TransactionItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Avatar
                    name={item.description}
                    size={40}
                    style={{ borderRadius: 8 }}
                />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.name}>{item.description}</Text>
                    <Text style={styles.payer}>{item.info} {item.amount}</Text>
                </View>
            </View>
            {/* {item.type === defineValue.Lend
                ?
                <View>
                    <Text style={styles.info}>Bạn cho mượn</Text>
                    <Text style={[styles.info, { color: colors.mainLight, alignSelf: "flex-end" }]}> {item.price}</Text>
                </View>
                :
                <View>
                    <Text style={styles.info}>Bạn mượn</Text>
                    <Text style={[styles.info, { color: colors.orange, alignSelf: "flex-end" }]}> {item.price}</Text>
                </View>
            } */}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    container: {
        paddingLeft: 20,
        paddingRight: 10,
        paddingVertical: 10,
        width: SCREEN_WIDTH,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.background,
        justifyContent: 'space-between',
    },
    name: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: colors.white
    },
    payer: {
        fontFamily: FONT_FAMILY,
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: colors.subTitle
    },
    info: {
        fontFamily: FONT_FAMILY,
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "right",
        color: colors.white
    },
})