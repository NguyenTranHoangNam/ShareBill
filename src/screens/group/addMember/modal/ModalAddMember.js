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
import { SBAddMember } from "../components/addMember/SBAddMember";

const { width, height } = Dimensions.get("screen");
export function ModalAddMember(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const alertaa=()=>{
    alert(1)
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      transparent
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.modalContainer}>
          <Text
            style={styles.titleStyles}
          >
            THÊM THÀNH VIÊN
          </Text>
          <SBAddMember />
        </View>
      </SafeAreaView>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dim,
    justifyContent: "center",
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
  titleStyles:{
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white,
  }
});
