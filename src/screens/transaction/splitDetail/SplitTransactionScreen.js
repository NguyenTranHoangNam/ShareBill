import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import { colors } from "../../../utils/color";
import { SBHeader, SBIconFont } from "../../../components/SBComponent";
import SplitViewPager from "./components/SplitViewPager";
import _ from 'lodash';
import Utils from "../../../utils/utils";

export const SplitTransactionScreen = ({navigation}) => {
  const transaction = navigation.getParam('transaction', null);
  const [payers, setPayers] = useState([]);

  useEffect(()=>{
    let transPayers = Utils.getPayers(transaction.payers);
    setPayers(transPayers);
  },[])

  const onBackPress = () => {
    navigation.goBack();
  };

  const navigateToSelectPayer=()=>{
    navigation.navigate('SelectPayerScreen');
  }

  const getPayersCountText = (payers) => {
    if (payers.length >= 1){
      if (payers.length === 1){
        return payers[0].fullname;
      }
      return `${payers.length} người`
    }
    return '';
  }

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={onBackPress} title={"Chi tiết chi tiêu"} />
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
        <TouchableOpacity onPress={navigateToSelectPayer} >
          <View style={styles.payerContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: colors.white
                }}
              />
              <Text style={{ marginLeft: 10, color: colors.white }}>
                Trả bởi <Text style={{ fontWeight: "bold" }}>{getPayersCountText(transaction.payers)}</Text>
              </Text>
            </View>
            <SBIconFont size={20} name={"chevron-right"} color={colors.subTitle} />
          </View>
        </TouchableOpacity>
        <SplitViewPager 
          transaction={transaction} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  scrollViewContentStyle: {
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
