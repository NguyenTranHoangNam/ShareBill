import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { colors } from '../../../utils/color';
import { SBHeader, SBTextInput, SBButton, SBIconFont } from "../../../components/SBComponent";
import { FONT_FAMILY, PAY_TYPE_TEXT, PAY_TYPE, SCREEN_WIDTH, BORDER_WIDTH } from '../../../utils/const';
import TransactionRequireInfoView from './components/TransactionRequireInfoView';
import TransactionOptionalInfoView from './components/TransactionOptionalInfoView';
import { TransactionImageView } from './components/TransactionImageView';

export const UpdateTransactionScreen = (props) => {

    const onBackPress = () => {
        props.navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            <SBHeader onLeftPress={onBackPress} title={'Thêm chi tiêu'} />
            <ScrollView>
                <TransactionRequireInfoView />

                <TransactionOptionalInfoView />

                <TransactionImageView />
            </ScrollView>
            <View style={{paddingHorizontal: 20, marginBottom: 10}}>
                <SBButton buttonText={'THÊM CHI TIÊU'} roundVertical />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    },
})