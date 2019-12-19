import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import { FONT_FAMILY, BORDER_WIDTH } from '../../../utils/const';
import { colors } from '../../../utils/color';
import { SBHeader } from '../../../components/SBComponent';

const data = [
    { title: 'Nội dung lịch sử', notiTime: '08/12 lúc 13:33' },
    { title: 'Nội dung lịch sử', notiTime: '08/12 lúc 13:33' },
]

export function HistoryScreen(props) {

    const renderItem = ({ item, index }) => {
        return (
            <TouchableListItem
                // onPress={navigateToGroupDetails}
                title={item.title}
                subTitle={item.notiTime}
                index={index}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <SBHeader type='tab' tabTitle={'Lịch sử'}/>
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={data}
                renderItem={renderItem}
                keyExtractor={index => String(index)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    menuStyles: {
        height: 47,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: FONT_FAMILY,
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: colors.white
    },
    contentContainerStyle: {
        paddingLeft: 20,
        borderBottomWidth: BORDER_WIDTH,
        borderBottomColor: colors.line
    },
})