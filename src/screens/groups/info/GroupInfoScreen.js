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
import { colors } from "../../../utils/color";
import { FONT_FAMILY } from "../../../utils/const";
import Avatar from "../../../components/Avatar";
import SBHeader from "../../../components/SBComponents/SBHeader";
import SBButton from "../../../components/SBComponents/SBButton";
import { SBIconFont } from "../../../components/SBComponent";
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

export function GroupInfoScreen(props) {
  const goBack = () => {
    props.navigation.goBack();
  };

  const navigateToAddMember=()=>{
    props.navigation.navigate('AddMember');
  }

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
          <Text style={styles.memberName}>
            {item.name}
          </Text>
          <Text style={styles.memberNumberPhone}>
            {item.numberPhone}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={goBack} />
      <View style={{ width, alignItems: "center" }}>
        <Avatar
          name={"default"}
          source={require("../../../assets/images/background.png")}
        />
        <Text style={styles.groupName}>Tên Nhóm</Text>
        <Text style={styles.countMember}>2 thành viên</Text>
      </View>
      <View style={styles.blockIcon}>
        <TouchableOpacity
          onPress={navigateToAddMember}
        >
          <View style={styles.circleIcon}>
            <SBIconFont name={"person-add"} color={colors.white} size={20} />
          </View>
        </TouchableOpacity>

        <View style={styles.circleIcon}>
          <SBIconFont name={"link"} color={colors.white} size={20} />
        </View>

        <View style={[styles.circleIcon, { backgroundColor: colors.red }]}>
          <SBIconFont name={"delete"} color={colors.white} size={20} />
        </View>
      </View>
      <View style={styles.headerList}>
        <Text style={styles.titleHeader}>Thành viên nhóm</Text>
      </View>
      <FlatList data={data} renderItem={renderItem} />
      <View style={styles.blockSave}>
        <SBButton
          buttonStyle={styles.saveButton}
          buttonText={"LƯU THÔNG TIN"}
          textStyle={styles.saveTitle}
        />
      </View>
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
  memberName: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  memberNumberPhone: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.subTitle
  },
  saveTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white
  },
  saveButton: {
    backgroundColor: colors.mainLight,
    borderRadius: 23
  },
  blockSave: { height: 40, marginLeft: 20, marginRight: 20, marginBottom: 10 }
});
