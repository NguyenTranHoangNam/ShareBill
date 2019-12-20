import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { colors } from "../../../utils/color";
import { FONT_FAMILY, BORDER_WIDTH } from "../../../utils/const";
import { SBIconFont, SBHeader } from "../../../components/SBComponent";
const { width, height } = Dimensions.get("screen");
export function ProfileScreen(props) {
  const navigationToNotiSetting=()=>{
    props.navigation.navigate("NotiSettings");
  }

  const navigationToMyQRCode=()=>{
    props.navigation.navigate("MyQRCode");
  }
  return (
    <SafeAreaView style={styles.container}>
      <SBHeader type='tab' tabTitle={'Cá nhân'} />
      <View style={styles.blockBoard}>
        <View style={styles.boardStyles}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/images/logo.png")}
          />
          <View>
            <Text style={[styles.info, { fontSize: 16 }]}>Lương Kiên Hào</Text>
            <Text
              style={[styles.info, { fontSize: 15, color: colors.subTitle }]}
            >
              luongkienhao@gmail.com
            </Text>
          </View>
        </View>
      </View>
      {/* My QR Code */}
      <TouchableOpacity
        onPress={navigationToMyQRCode}
      >
        <View style={styles.blockFunction}>
          <SBIconFont
            style={{ marginLeft: 10, marginRight: 10 }}
            name={"code"}
            size={20}
            color={colors.white}
          />
          <Text style={styles.functionName}>Mã QR của tôi</Text>
          <SBIconFont
            style={styles.arrowIcon}
            name={"keyboard-arrow-right"}
            size={25}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.itemSeparatorStyles} />
      {/* Announcement */}
      <TouchableOpacity
        onPress={navigationToNotiSetting}
      >
        <View style={styles.blockFunction}>
          <SBIconFont
            style={{ marginLeft: 10, marginRight: 10 }}
            name={"notifications-none"}
            size={20}
            color={colors.white}
          />
          <Text style={styles.functionName}>Thông báo</Text>
          <SBIconFont
            style={styles.arrowIcon}
            name={"keyboard-arrow-right"}
            size={25}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.itemSeparatorStyles} />
      <TouchableOpacity>
        <View style={styles.blockFunction}>
          <SBIconFont
            style={{ marginLeft: 10, marginRight: 10 }}
            name={"info-outline"}
            size={20}
            color={colors.white}
          />
          <Text style={styles.functionName}>Thông tin về ShareBill</Text>
          <SBIconFont
            style={styles.arrowIcon}
            name={"keyboard-arrow-right"}
            size={25}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.itemSeparatorStyles} />
      <TouchableOpacity>
        <View style={styles.blockFunction}>
          <SBIconFont
            style={{ marginLeft: 10, marginRight: 10 }}
            name={"exit-to-app"}
            size={20}
            color={colors.white}
          />
          <Text style={styles.functionName}>Đăng xuất</Text>
          <SBIconFont
            style={styles.arrowIcon}
            name={"keyboard-arrow-right"}
            size={25}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.endingItemSeparatorStyles} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  menuStyles: {
    height: 47,
    width,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    marginLeft: 10,
    fontFamily: FONT_FAMILY,
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  boardStyles: {
    borderRadius: 20,
    backgroundColor: colors.block,
    // width: width * 0.94,
    height: height * 0.13,
    marginTop: height * 0.02,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  avatar: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.8,
    marginLeft: width * 0.04,
    marginRight: width * 0.044
  },
  info: {
    fontFamily: FONT_FAMILY,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  blockFunction: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 12,
    marginBottom: 12
  },
  functionName: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  blockBoard: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15
  },
  itemSeparatorStyles: {
    width: width - 40,
    height: BORDER_WIDTH,
    backgroundColor: colors.line,
    alignSelf: "flex-end"
  },
  endingItemSeparatorStyles:{
    width,
    height: BORDER_WIDTH,
    backgroundColor: colors.line,
    alignSelf: "flex-end"
  },
  arrowIcon: {
    flex: 1,
    textAlign: "right",
    marginRight: 10
  }
});
