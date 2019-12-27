import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { colors } from "../../../utils/color";
import {
  SBHeader,
  SBButton,
} from "../../../components/SBComponent";
import TransactionRequireInfoView from "./components/TransactionRequireInfoView";
import TransactionOptionalInfoView from "./components/TransactionOptionalInfoView";
import { TransactionImageView } from "./components/TransactionImageView";
import { useSelector, useDispatch } from "react-redux";

export const UpdateTransactionScreen = props => {
  const onBackPress = () => {
    props.navigation.navigate(props.navigation.state.params.fromTab);
  };

  const counter = useSelector(state => state.transaction.counter);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={onBackPress} title={"Thêm chi tiêu " + counter} />
      <ScrollView>
        <TransactionRequireInfoView />

        <TransactionOptionalInfoView />

        <TransactionImageView />
      </ScrollView>
      <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
        <SBButton
          buttonText={"THÊM CHI TIÊU"}
          roundVertical
          onPress={() => {
            dispatch({
              type: "INCREMENT_ASYNC"
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  }
});
