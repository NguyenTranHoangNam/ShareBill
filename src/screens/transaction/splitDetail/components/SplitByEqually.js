import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
} from "react-native";
import { styles } from './SplitBy.style';
import SBCheckbox from "../../../../components/SBComponents/SBCheckbox";

const data = [1, 2];
export const SplitByEqually = props => {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowStyles}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.avatarStyles}
        />
        <Text style={styles.memberStyles}>Tên thành viên {item}</Text>
        <View style={styles.checkBoxStyles}>
          <SBCheckbox />
        </View>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return `${index}`;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.pagerSummaryContainer, styles.row]}>
        <View style={styles.summaryLeftContainer}>
          <Text style={styles.summaryTilte}>2.500.000đ/người</Text>
          <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>(2 người)</Text>
        </View>
        <View style={styles.summaryRightContainer}>
          <Text style={[styles.summaryTilte, { marginRight: 5 }]}>Tất cả</Text>
          <SBCheckbox />
        </View>
      </View>
      <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={data} />
    </SafeAreaView>
  );
};