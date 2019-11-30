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
import { SBIconFont, SBTextInput } from "../../../components/SBComponent";
import { ModalAddMember } from "../addMember/modal/ModalAddMember";
const { width, height } = Dimensions.get("screen");


export function AddMemberScreen(props) {
  const goBack = () => {
    props.navigation.goBack();
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader 
        onLeftPress={goBack}
      />
     
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
    borderBottomWidth: 1,
    borderBottomColor: colors.subTitle,
    paddingBottom:1,
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
    fontWeight: "500",
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
