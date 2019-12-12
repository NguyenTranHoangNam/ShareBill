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
export const SplitByAdjustment = props => {
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
            <Text style={styles.unitPercent}>+</Text>
            <SBTextInput 
            style={styles.inputAmount}
            placeholder={'0.000'}
            />

        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
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
    alignItems:'flex-end',
    flexDirection:'row'
  },
  inputAmount:{
    width: 60,
    borderBottomColor:colors.subTitle,
    paddingBottom:0,
    textAlign:'right'
  },
  unitPercent:{
      color:colors.white,
      paddingBottom:7
  }
});
