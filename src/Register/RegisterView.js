import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TextInput
} from "react-native";
import { colors } from "../utils/color";
import CustomButton from "../components/button/CustomButton";
import IconIonicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get("screen");
export function Register(props) {

  const navigateToLogin = () => {
    props.navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundStyles}
        imageStyle={{ flex: 1 }}
        source={require("../assets/images/background.png")}
      >
        <IconIonicons style={{width,marginLeft:15}} name={'md-arrow-back'} size={20} color={colors.white} />
        <Text style={styles.title}>ĐĂNG KÝ</Text>
        <TextInput
          style={styles.inputStyles}
          placeholderTextColor={colors.subTitle}
          placeholder={"Họ tên"}
        />
        <TextInput
          style={styles.inputStyles}
          placeholderTextColor={colors.subTitle}
          placeholder={"Số điện thoại"}
        />
        <TextInput
          style={styles.inputStyles}
          placeholderTextColor={colors.subTitle}
          placeholder={"Mật khẩu"}
          secureTextEntry
        />
        <TextInput
          style={styles.inputStyles}
          placeholderTextColor={colors.subTitle}
          placeholder={"Nhập lại mật khẩu"}
          secureTextEntry
        />
        <CustomButton
          title={"Đăng ký"}
          onPress={()=>{}}
          style={styles.registerButtonStyles}
          titleStyles={[styles.titleStyles,styles.registerTitle]}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundStyles: { flex: 1, alignItems: "center" },
  logoStyles: {
    width: width * 0.27,
    height: width * 0.27,
    marginTop: height * 0.0625
  },
  title: {
    //fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    width: width * 0.41,
    height: height * 0.17,
    marginTop: height * 0.2
  },
  loginButtonStyles: {
    backgroundColor: colors.main,
    width: width * 0.61,
    height: height * 0.055,
    borderRadius: 4,
    marginTop: height * 0.08
  },
  titleStyles: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    opacity: 0.98,
    //fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0
  },
  logInTitle: {
    color: colors.white
  },
  inputStyles: {
    width: width * 0.74,
    height: height * 0.06,
    minHeight: height * 0.06,
    borderBottomColor: colors.lineForm,
    borderBottomWidth: 1,
    color: colors.subTitle
  },
  registerButtonStyles: {
    width: width * 0.61,
    height: height * 0.055,
    borderRadius: 4,
    borderColor: colors.mainLight,
    borderWidth: 1,
    marginTop: height * 0.035,
  },
  registerTitle: {
    color: colors.mainLight
  },
});
