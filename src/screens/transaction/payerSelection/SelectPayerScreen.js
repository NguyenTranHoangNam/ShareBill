import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Text} from "react-native";
import { colors } from "../../../utils/color";
import { SBHeader, SBSwitch } from "../../../components/SBComponent";
import PayByOne from "./components/PayByOne";
import PayByMulti from "./components/PayByMulti";

export const SelectPayerScreen = props => {
  const [isMultiPayer, setMultiPayer] = useState(false);

  const onBackPress = () => {
    props.navigation.goBack();
  };

  const setMultiPayerChange = () => {
    setMultiPayer(!isMultiPayer);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={onBackPress} title={"Chọn người thanh toán"} />
      <View style={styles.payerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginLeft: 10, color: colors.white }}>
            Được trả bởi nhiều người
          </Text>
        </View>
        <SBSwitch value={isMultiPayer} onValueChange={setMultiPayerChange} />
      </View>
      {!isMultiPayer ? <PayByOne data={[1, 2]} /> : <PayByMulti data={[1, 2]} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  payerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 15,
    paddingVertical: 10,
    height: 60,
    backgroundColor: colors.block
  }
});
