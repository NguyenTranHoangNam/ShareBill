import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  SectionList
} from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconFeather from "react-native-vector-icons/Feather";
import { colors } from "../../../utils/color";
import CustomButton from "../../../components/button/CustomButton";
import { FONT_FAMILY } from "../../../utils/const";
import Avatar from "../../../components/Avatar";
import { defineValue } from "../../../utils/defineValue";
import SBHeader from "../../../components/SBComponents/SBHeader";
const { width, height } = Dimensions.get("screen");

const data = [
  {
    title: "Tháng 09/2019",
    data: [
      {
        type: "Own",
        quantity: 500000,
        groupName: "Bánh kẹo",
        info: "Bạn nợ "
      },
      {
        type: "Lend",
        quantity: 450000,
        groupName: "Giày",
        info: "Hoàng Nam trả "
      }
    ]
  },
  {
    title: "Tháng 10/2019",
    data: [
      {
        type: "Own",
        quantity: 50000,
        groupName: "Bánh bao",
        info: "Bạn nợ "
      },
      {
        type: "Lend",
        quantity: 100000,
        groupName: "Trà sửa",
        info: "K.Hào trả "
      }
    ]
  }
];

export function GroupDetails(props) {
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
          style={{ borderRadius: 8, marginLeft: 20 }}
        />
        <View style={{ marginLeft: 35 }}>
          <Text
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 14,
              fontWeight: "500",
              fontStyle: "normal",
              letterSpacing: 0,
              color: colors.white
            }}
          >
            {item.groupName}
          </Text>
          <Text
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 11,
              fontWeight: "normal",
              fontStyle: "normal",
              letterSpacing: 0,
              color: colors.subTitle
            }}
          >
            {item.info} {item.quantity}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {item.type === defineValue.Lend
            ? <View style={{ alignSelf: "flex-end",marginRight:10 }}>
                <Text style={styles.info} >Bạn cho mượn</Text>
                <Text style={[styles.info,{ color: colors.mainLight,alignSelf: "flex-end" }]}>
                  {" "}{item.quantity}
                </Text>
              </View>
            : <View style={{ alignSelf: "flex-end",marginRight:10 }}>
                <Text style={styles.info} >Bạn mượn</Text>
                <Text style={[styles.info,{ color: colors.orange ,alignSelf: "flex-end"}]}>
                  {" "}{item.quantity}
                </Text>
              </View>}
        </View>
      </View>
    );
  };

  const renderHeader = ({ section: { title } }) => {
    return (
      <View style={styles.header}>
      <Text style={styles.titleHeader}>
        {title}
      </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader
        rightIconName={'info'}
      />
      <Avatar
        name={"default"}
        source={require("../../../assets/images/background.png")}
      />
      <Text style={styles.groupName}>Tên Nhóm</Text>
      <Text style={styles.info}>
        Bạn nợ{" "}
        <Text style={[styles.info, { color: colors.orange }]}>500.000đ</Text>
      </Text>
      <View style={styles.blockButton}>
        <CustomButton
          title={"Trả nợ"}
          //   onPress={navigateToLogin}
          style={styles.buttonStyles}
          titleStyles={[styles.titleStyles]}
        />
        <CustomButton
          title={"Số dư"}
          //   onPress={navigateToLogin}
          style={styles.buttonStyles}
          titleStyles={[styles.titleStyles]}
        />
      </View>

      <View style={styles.blockSectionList}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center"
  },
  headerStyles: {
    height: 47,
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 150,
    marginRight: 150
  },
  groupName: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    marginTop: 10
  },
  info: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    marginTop: 5
  },
  buttonStyles: {
    backgroundColor: colors.main,
    width: 120,
    height: height * 0.041,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  titleStyles: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    alignSelf: "center"
  },
  blockButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    width,
    marginTop: 15
  },
  blockSectionList: {
    flex: 1,
    width,
    marginTop: 28
    // backgroundColor:'red'
  },
  header: {
    width,
    height: 20,
    backgroundColor: colors.block,
    justifyContent: "center"
  },
  titleHeader:{
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white,
    paddingLeft: 10,

  },
  info:{
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: colors.white
  }
});
