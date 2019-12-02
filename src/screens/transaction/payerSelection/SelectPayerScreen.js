import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { colors } from '../../../utils/color';
import { SBHeader, SBTextInput, SBButton, SBIconFont } from "../../../components/SBComponent";

export const SelectPayerScreen = (props) => {

    const onBackPress = () => {
        props.navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            <SBHeader onLeftPress={onBackPress} title={'Chọn người thanh toán'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    },
})