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
            style={{  marginRight: 15 }}
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
        <Text>Tên Nhóm</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center"
  },
  headerStyles:{
    height: height * 0.06,
    width,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  avatar: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.8,
    marginLeft: width * 0.04,
    marginRight: width * 0.044
  },
});
