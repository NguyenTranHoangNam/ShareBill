import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
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
import IndicatorViewPager from "../../../components/ViewPager/IndicatorViewPager";
import PagerTitleIndicator from "../../../components/ViewPager/indicator/PagerTitleIndicator";
import PagerCustomIndicator from "../../../components/ViewPager/indicator/PagerCustomIndicator";
import { FONT_FAMILY, BORDER_WIDTH } from "../../../utils/const";
import SplitViewPager from "./components/SplitViewPager";

export const SplitTransactionScreen = props => {
  const onBackPress = () => {
    props.navigation.goBack();
  };

  const navigateToSelectPayer=()=>{
      props.navigation.navigate('SelectPayerScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={onBackPress} title={"Chi tiết chi tiêu"} />
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
        <TouchableOpacity
            onPress={navigateToSelectPayer}
        >
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
                Trả bởi <Text style={{ fontWeight: "bold" }}>Hào Lương</Text>
              </Text>
            </View>
            <SBIconFont
              size={20}
              name={"chevron-right"}
              color={colors.subTitle}
            />
          </View>
        </TouchableOpacity>
        <SplitViewPager />
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
