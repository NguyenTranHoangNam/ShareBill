import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { colors } from "../../../../../utils/color";
import { SBTextInput, SBButton } from "../../../../../components/SBComponent";
import { FONT_FAMILY } from "../../../../../utils/const";

export function MemberInfoInput(props) {
  const [name, setMember] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <SBTextInput
            style={styles.inputStyles}
            placeholder={"Tên"}
            value={name}
            onChangeText={name => setMember(name)}
          />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <SBTextInput
            style={styles.inputStyles}
            placeholder={"Email"}
            onChangeText={email => setEmail(email)}
            value={email}
          />
        </View>
      </View>
      <View style={styles.blockButton}>
        <SBButton
          // onPress={props.onPress}
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          buttonText={"THÊM THÀNH VIÊN"}
          disabled={name == "" || email == ""}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "space-between"
  },
  inputStyles: {
    fontFamily: FONT_FAMILY,
    fontSize: 13,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.subTitle,
    paddingBottom: 1
  },
  buttonStyle: {
    borderRadius: 23
  },
  buttonTextStyle: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white
  },
  blockButton: {
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 10
  }
});
