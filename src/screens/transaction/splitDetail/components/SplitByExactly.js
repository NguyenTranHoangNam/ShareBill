import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
} from "react-native";
import { styles } from './SplitBy.style';
import { SBTextInput } from "../../../../components/SBComponent";

const data = [1, 2];
export const SplitByExactly = props => {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowStyles}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.avatarStyles}
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
    <SafeAreaView style={styles.container}>
      <View style={styles.pagerSummaryContainer}>
        <Text style={styles.summaryTilte}>0đ trên 5.000.000đ</Text>
        <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>còn 5.000.000đ</Text>
      </View>
      <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={data} />
    </SafeAreaView>
  );
};