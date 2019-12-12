import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  CheckBox
} from "react-native";
import { colors } from "../../../../utils/color";
import { FONT_FAMILY } from "../../../../utils/const";
import { SBTextInput } from "../../../../components/SBComponent";

const data = [1, 2];
export const SplitByExactly = props => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.rowStyles}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.avatarStyles}
        />
        <Text style={styles.memberStyles}>
          Tên thành viên {item}
        </Text>
        <View style={styles.inputAmountContainer}>
          <SBTextInput
            style={styles.inputAmount}
            placeholder={'0.000'}
          />
          <Text style={styles.unitMoney}>đ</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pagerSummaryContainer}>
        <Text style={styles.summaryTilte}>0đ trên 5.000.000đ</Text>
        <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>còn 5.000.000đ</Text>
      </View>
      <FlatList renderItem={renderItem} data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 15,
    paddingVertical: 10,
  },
  avatarStyles: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  memberStyles: {
    marginLeft: 15,
    color: colors.white,
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "500"
  },
  inputAmountContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  inputAmount: {
    width: 60,
    borderBottomColor: colors.subTitle,
    paddingBottom: 0,
    textAlign: 'right'
  },
  unitMoney: {
    color: colors.white,
    paddingBottom: 7
  },
  pagerSummaryContainer: {
    height: 50,
    paddingVertical: 10,
    backgroundColor: colors.block,
    alignItems: 'center',
    justifyContent: 'center'
  },
  summaryTilte: {
    fontFamily: FONT_FAMILY,
    fontSize: 13,
    color: colors.white,
    fontWeight: 'bold'
  },
});
