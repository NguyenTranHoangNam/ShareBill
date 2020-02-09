import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Modal,
  Text
} from "react-native";
import { colors } from "../../../../utils/color";
import { MemberInfoInput } from "../components/addMember/MemberInfoInput";
import { FONT_FAMILY } from "../../../../utils/const";

const { width, height } = Dimensions.get("screen");
export function ModalAddMember(props) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}
      transparent
    >
      <TouchableOpacity
        style={styles.container}
        onPress={props.closeModal}
        activeOpacity={1}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.modalContainer}>
            <Text style={styles.titleStyles}>THÊM THÀNH VIÊN</Text>
            <MemberInfoInput onPress={props.closeModal} />
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dim,
    justifyContent: "center"
  },
  modalContainer: {
    height: height * 0.3,
    backgroundColor: colors.background,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 8,
    overflow: "hidden",
    paddingVertical: 20
  },
  titleStyles: {
    textAlign: "center",
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  }
});
