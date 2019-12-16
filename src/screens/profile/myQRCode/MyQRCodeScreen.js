import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  Image
} from "react-native";
import { colors } from "../../../utils/color";
import { FONT_FAMILY } from "../../../utils/const";
import SBHeader from "../../../components/SBComponents/SBHeader";
const { width, height } = Dimensions.get("screen");

export function MyQRCodeScreen(props) {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={goBack} title={"Mã QR của tôi"} />

      <Image
        source={{
          uri:
            "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
        }}
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          marginTop: 21
        }}
      />
      <View style={{ marginTop: 50,marginLeft:20,marginRight:20 }}>
        <Text style={styles.titleHeader}>Bạn bè có thể tìm kiếm và kết nối với bạn khi quét mã QR này.</Text>
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
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white,
    paddingLeft: 10,
    textAlign:'center'
  }
});
