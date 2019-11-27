import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  FlatList
} from "react-native";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../../utils/color";
import CustomButton from "../../../components/button/CustomButton";
import { FONT_FAMILY } from "../../../utils/const";
import Avatar from "../../../components/Avatar";
import { defineValue } from "../../../utils/defineValue";
import SBHeader from "../../../components/SBComponents/SBHeader";
const { width, height } = Dimensions.get("screen");

const data = [
  {
    avatar: "",
    name: "Lương Kiên Hào",
    numberPhone: "123456789"
  },
  {
    avatar: "",
    name: "Nguyễn Trần Hoàng Nam",
    numberPhone: "112233445"
  }
];

export function GroupInfo(props) {
  const goBack = () => {
    props.navigation.goBack();
  };

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width,
          height: 60,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Avatar
          name={"default"}
          source={require("../../../assets/images/background.png")}
          size={40}
          style={{ borderRadius: 20, marginLeft: 20 }}
        />
        <View style={{ marginLeft: 35 }}>
          <Text
            style={styles.memberName}
          >
            {item.name}
          </Text>
          <Text
            style={styles.memberNumberPhone}
          >
            {item.numberPhone}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader rightIconName={"info"} />
      <View style={{ width, alignItems: "center" }}>
        <Avatar
          name={"default"}
          source={require("../../../assets/images/background.png")}
        />

        <Text style={styles.groupName}>Tên Nhóm</Text>
        <Text style={styles.countMember}>2 thành viên</Text>
      </View>
      <View style={styles.blockIcon}>
        <View style={styles.circleIcon}>
          <IconMaterial name={"person-add"} color={colors.white} size={20} />
        </View>

        <View style={styles.circleIcon}>
          <IconMaterial name={"link"} color={colors.white} size={20} />
        </View>

        <View style={[styles.circleIcon, { backgroundColor: colors.red }]}>
          <IconMaterial name={"delete"} color={colors.white} size={20} />
        </View>
      </View>
      <View style={styles.headerList}>
        <Text style={styles.titleHeader}>Thành viên nhóm</Text>
      </View>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
    // alignItems: "center"
  },
  groupName: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.subTitle,
    width: 95
  },
  circleIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.subTitle,
    justifyContent: "center",
    alignItems: "center"
  },
  countMember: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.subTitle,
    marginTop: 5
  },
  blockIcon: {
    flexDirection: "row",
    marginLeft: 105,
    marginRight: 105,
    justifyContent: "space-around",
    marginTop: 15
  },
  headerList: {
    width,
    height: 20,
    justifyContent: "center",
    marginTop: 25
  },
  titleHeader: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.subTitle,
    paddingLeft: 10
  },
  memberName:{
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  memberNumberPhone:{
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.subTitle
  }
});
