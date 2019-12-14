import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../../splitDetail/components/SplitBy.style';
import Avatar from '../../../../components/Avatar';
import { colors } from '../../../../utils/color';
import { BORDER_WIDTH } from '../../../../utils/const';

export default PayByMulti = ({ data }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.rowStyles}>
                <Avatar
                    source={require("../../../../assets/images/logo.png")}
                    size={40}
                />
                <Text style={styles.memberStyles}>Tên thành viên {item}</Text>
                <View style={styles.inputAmountContainer}>
                    <SBTextInput
                        style={styles.inputAmount}
                        placeholder={'0.000'}
                    />
                    <Text style={styles.unit}>đ</Text>
                </View>
            </View>
        );
    };

    const keyExtractor = (index) => {
        return `${index}`;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.pagerSummaryContainer, {backgroundColor: 'transparent', borderBottomColor: colors.line, borderBottomWidth: BORDER_WIDTH}]}>
                <Text style={styles.summaryTilte}>0đ trên 5.000.000đ</Text>
                <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>còn 5.000.000đ</Text>
            </View>
            <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={data} />
        </View>
    )
}