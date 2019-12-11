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
export const SplitByPercent = props => {
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
            placeholder={'0.0'}
            />
            <Text style={styles.unitPercent}>%</Text>
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
    marginTop: 10,
    marginBottom: 10
  },
  avatarStyles: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 20
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
      marginRight:15,
      paddingBottom:7
  }
});
