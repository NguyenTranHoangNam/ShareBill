import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  FlatList,
  Image
} from "react-native";
import { colors } from "../../../utils/color";
import { FONT_FAMILY } from "../../../utils/const";
import Avatar from "../../../components/Avatar";
import SBHeader from "../../../components/SBComponents/SBHeader";
import SBButton from "../../../components/SBComponents/SBButton";
import { SBIconFont } from "../../../components/SBComponent";
import { defineValue } from "../../../utils/defineValue";
const { width, height } = Dimensions.get("screen");

const data = [
  {
    type: "Own",
    quantity: 500000,
    groupName: "Đài loan"
  },
  {
    type: "Lend",
    quantity: 4500000,
    groupName: "Thái lan"
  }
];

export function FriendInfoScreen(props) {
  const goBack = () => {
    props.navigation.goBack();
  };

  const navigateToGroupDetails = () => {
    props.navigation.navigate("GroupDetails");
  };
  const renderItem = ({ index, item }) => {
    return (
      <TouchableOpacity onPress={navigateToGroupDetails}>
        <View style={styles.itemStyles}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/images/background.png")}
          />
          <View>
            <Text style={styles.groupName}>
              {item.groupName}
            </Text>
            <View style={{ flexDirection: "row" }}>
              {item.type === defineValue.Lend
                ? <Text style={styles.groupInfo}>
                    Bạn cho mượn
                    <Text style={{ color: colors.mainLight }}>
                      {" "}{item.quantity}
                    </Text>
                  </Text>
                : <Text style={styles.groupInfo}>
                    Bạn mượn
                    <Text style={{ color: colors.orange }}>
                      {" "}{item.quantity}
                    </Text>
                  </Text>}
              <SBIconFont
                style={{ marginLeft: 5 }}
                name={"info"}
                size={14}
                color={colors.white}
              />
            </View>
          </View>
          <SBIconFont
            style={styles.arrowIcon}
            name={"keyboard-arrow-right"}
            size={20}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={goBack} rightText={"Huỷ kết bạn"} />
      <View style={{ width, alignItems: "center" }}>
        <Avatar
          name={"default"}
          source={require("../../../assets/images/background.png")}
        />

        <Text style={styles.friendName}>Tên Bạn</Text>
        <Text style={styles.loanInfo}>Bạn nợ 50000đ</Text>
      </View>
      <View style={styles.blockLoanInfo}>
        <SBButton
          buttonStyle={styles.loanButton}
          buttonText={"TRẢ NỢ"}
          textStyle={styles.loanTitle}
        />
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
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  loanInfo: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.subTitle,
    marginTop: 5
  },
  loanTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white
  },
  loanButton: {
    backgroundColor: colors.mainLight,
    borderRadius: 3
  },
  blockLoanInfo: {
    height: 40,
    marginLeft: 120,
    marginRight: 120,
    marginBottom: 20,
    marginTop: 15
  },
  groupInfo: {
    color: colors.white
  },
  itemStyles: {
    width: width,
    height: height * 0.09,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5
  },
  avatar: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.8,
    marginLeft: width * 0.04,
    marginRight: width * 0.044
  },
  arrowIcon: {
    flex: 1,
    textAlign: "right",
    marginRight: width * 0.044
  },
  friendName: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white
  }
});
