import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  Image
} from "react-native";
import { colors } from "../../../utils/color";
import { FONT_FAMILY } from "../../../utils/const";
import Avatar from "../../../components/Avatar";
import SBHeader from "../../../components/SBComponents/SBHeader";
import SBButton from "../../../components/SBComponents/SBButton";
import { SBIconFont, SBTextInput } from "../../../components/SBComponent";
import { ModalAddMember } from "../addMember/modal/ModalAddMember";
import { SBAddMember } from "./components/addMember/SBAddMember";
const { width, height } = Dimensions.get("screen");

export function AddMemberScreen(props) {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={goBack} />
      <View style={styles.headerList}>
        <Text style={styles.titleHeader}>Chia sẻ QR Code này</Text>
      </View>

      <Image
        source={{
          uri:
            "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
        }}
        style={{ width: 200, height: 200, alignSelf: "center", marginTop: 21 }}
      />
      <View style={[styles.headerList,{marginTop:50}]}>
        <Text style={styles.titleHeader}>Hoặc nhập thông tin thành viên</Text>
      </View>
      <View style={{ flex: 1, paddingVertical: 20 }}>
        <SBAddMember />
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
  headerList: {
    width,
    height: 20,
    justifyContent: "center",
    backgroundColor: colors.block
  },
  titleHeader: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white,
    paddingLeft: 10
  }
});
