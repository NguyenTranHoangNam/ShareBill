import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../../utils/color";
import { SBHeader, SBTextInput, SBButton } from "../../components/SBComponent";
import { FONT_FAMILY } from "../../utils/const";
export const LoginScreen = (props) => {
  // Khai báo 1 biến số đếm, gọi là "count"

  const navigateToLogin = () => {
    props.navigation.navigate("Login");
  };

  const goBack = () => {
    props.navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundStyles}
        imageStyle={{ flex: 1 }}
        source={require("../../assets/images/background.png")}
      >
        <SBHeader onLeftPress={goBack} />
        <View style={styles.content}>
          <Text style={styles.title}>ĐĂNG NHẬP</Text>
          <SBTextInput
            placeholder={"Số điện thoại"}
          />
          <SBTextInput
            placeholder={"Mật khẩu"}
            secureTextEntry
          />
          <SBButton
            buttonStyle={{ width: 220, marginTop: 60 }}
            buttonText={'Đăng nhập'}
            onPress={navigateToLogin}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundStyles: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 45,
  },
  title: {
    marginVertical: 70,
    fontFamily: FONT_FAMILY,
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: colors.white
  },
});
