import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
} from "react-native";
import { colors } from "../../../../utils/color";
import { styles } from './SplitBy.style';
import { SBTextInput } from "../../../../components/SBComponent";

const data = [1, 2];
export const SplitByPercent = props => {

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
            placeholder={'0.0'}
          />
          <Text style={styles.unit}>%</Text>
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
        <Text style={styles.summaryTilte}>0% trên 100%</Text>
        <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>còn 100%</Text>
      </View>
      <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={data} />
    </SafeAreaView>
  );
};