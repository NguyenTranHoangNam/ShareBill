import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet
} from "react-native";
import { colors } from "../utils/color";
import CustomButton from "../components/button/CustomButton";
const { width, height } = Dimensions.get("screen");
export function Splash(props) {
  // Khai báo 1 biến số đếm, gọi là "count"
  
  const navigateToLogin=()=>{
    props.navigation.navigate('Login')
  }

  const navigateToRegister=()=>{
    props.navigation.navigate('Register')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundStyles}
        imageStyle={{ flex: 1 }}
        source={require("../assets/images/background.png")}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logoStyles}
        />
        <Text style={styles.appNameStyles}>SHARE BILL</Text>
        <CustomButton
          title={"Login"}
          onPress={navigateToLogin}
          style={styles.loginButtonStyles}
          titleStyles={[styles.titleStyles,styles.logInTitle]}
        />
        <CustomButton
          title={"Register"}
          onPress={navigateToRegister}
          style={styles.registerButtonStyles}
          titleStyles={[styles.titleStyles,styles.registerTitle]}
        />
        <CustomButton
          title={"Quên mật khẩu?"}
          onPress={() => {
            alert(1);
          }}
          style={styles.forgotPasswordButton}
          titleStyles={styles.forgotPasswordStyles}
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
  appNameStyles: {
    //fontFamily: "Roboto",
    fontSize: 50,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    width: width * 0.92,
    height: height * 0.17,
    marginTop: height * 0.027
  },
  loginButtonStyles: {
    backgroundColor: colors.main,
    width: width * 0.61,
    height: height * 0.055,
    borderRadius: 4
  },
  registerButtonStyles: {
    width: width * 0.61,
    height: height * 0.055,
    borderRadius: 4,
    borderColor: colors.mainLight,
    borderWidth: 1,
    marginTop: height * 0.035,
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
  registerTitle: {
    color: colors.mainLight
  },
  forgotPasswordStyles:{
    color:colors.white
  },
  forgotPasswordButton:{
    marginTop: height * 0.035,
  }
});
