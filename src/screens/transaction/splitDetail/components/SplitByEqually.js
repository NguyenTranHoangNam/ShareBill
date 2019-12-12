import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  CheckBox
} from "react-native";
import { colors } from "../../../../utils/color";
import { FONT_FAMILY, BORDER_WIDTH } from "../../../../utils/const";

const data = [1, 2];
export const SplitByEqually = props => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.rowStyles}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.avatarStyles}
        />
        <Text style={styles.memberStyles}>
          Tên thành viên {item}
        </Text>
        <View style={styles.checkBoxStyles}>
          <CheckBox style={{ borderRadius: 20 }} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.pagerSummaryContainer, styles.row]}>
        <View style={styles.summaryLeftContainer}>
          <Text style={styles.summaryTilte}>2.500.000đ/người</Text>
          <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>(2 người)</Text>
        </View>
        <View style={styles.summaryRightContainer}>
          <Text style={[styles.summaryTilte, { marginRight: 5 }]}>Tất cả</Text>
          <SBIconFont name='check-circle' color={colors.main} size={20} />
        </View>
      </View>
      <FlatList renderItem={renderItem} data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 15,
    paddingVertical: 10,
  },
  avatarStyles: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  memberStyles: {
    marginLeft: 15,
    color: colors.white,
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "500"
  },
  checkBoxStyles: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'flex-end'
  },
  row: {
    flexDirection: 'row',
  },
  pagerSummaryContainer: {
    height: 50,
    paddingVertical: 10,
    backgroundColor: colors.block,
    alignItems: 'center',
    justifyContent: 'center'
  },
  summaryLeftContainer: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  summaryRightContainer: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: BORDER_WIDTH,
    borderLeftColor: colors.subTitle,
    flexDirection: 'row'
  },
  summaryTilte: {
    fontFamily: FONT_FAMILY,
    fontSize: 13,
    color: colors.white,
    fontWeight: 'bold'
  },
});
