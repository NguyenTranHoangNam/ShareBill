import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import { colors } from "../../../utils/color";
import {
  SBHeader,
  SBTextInput,
  SBButton,
  SBIconFont
} from "../../../components/SBComponent";
import { SplitByExactly } from "../splitDetail/components/SplitByExactly";
import { SplitByEqually } from "../splitDetail/components/SplitByEqually";

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
        <Switch value={isMultiPayer} onValueChange={setMultiPayerChange} />
      </View>
      {isMultiPayer ? <SplitByExactly /> : <SplitByEqually />}
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 60,
    backgroundColor: colors.block
  }
});
