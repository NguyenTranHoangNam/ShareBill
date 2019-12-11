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

const data = [1, 2];
export const SplitByEqually = props => {
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
        <View style={styles.checkBoxStyles}>
          <CheckBox style={{ borderRadius: 20 }} />
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
  checkBoxStyles: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems:'flex-end'
  }
});
