import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Text
} from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconFeather from "react-native-vector-icons/Feather";
import { colors } from "../../../utils/color";
import CustomButton from "../../../components/button/CustomButton";
const { width, height } = Dimensions.get("screen");
export function GroupDetails(props) {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyles}>
        <TouchableOpacity onPress={goBack}>
          <IconIonicons
            style={{ marginLeft: 15 }}
            name={"md-arrow-back"}
            size={20}
            color={colors.white}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={goBack}>
          <IconFeather
            style={{ marginRight: 15 }}
            name={"info"}
            size={20}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.avatar}
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
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.8,
    marginLeft: width * 0.04,
    marginRight: width * 0.044
  },
  groupName: {
    // fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white
  },
  info: {
    // fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
  },
  buttonStyles: {
    backgroundColor: colors.main,
    width: width * 0.3,
    height: height * 0.041,
    borderRadius: 4,
    marginTop: height * 0.08,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  titleStyles: {
    // fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    alignSelf: "center"
  },
  blockButton:{ 
      flexDirection: "row",
       justifyContent: "space-around",
       width
    }
});
