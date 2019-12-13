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
export const SplitByAdjustment = props => {
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowStyles}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.avatarStyles}
        />
        <Text style={styles.memberStyles}>Tên thành viên {item}</Text>
        <View style={styles.inputAmountContainer}>
          <Text style={styles.unit}>+</Text>
          <SBTextInput
            style={styles.inputAmount}
            placeholder={'0.000'}
          />
        </View>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return `${index}`;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={data} />
    </SafeAreaView>
  );
};

