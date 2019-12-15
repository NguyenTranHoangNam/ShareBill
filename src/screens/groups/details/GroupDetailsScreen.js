import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView
} from "react-native";
import { colors } from "../../../utils/color";
import { FONT_FAMILY } from "../../../utils/const";
import Avatar from "../../../components/Avatar";
import { defineValue } from "../../../utils/defineValue";
import SBHeader from "../../../components/SBComponents/SBHeader";
import { SBButton } from "../../../components/SBComponent";
import SwipeListView from "../../../components/SwipeList/SwipeListView";
import DetailCover from "../../../components/DetailCover";
import TransactionItem from "./components/TransactionItem";
const { width, height } = Dimensions.get("screen");

const data = [
  {
    title: "Tháng 09/2019",
    data: [
      {
        type: "Own",
        price: 500000,
        transName: "Bánh kẹo",
        info: "Bạn nợ "
      },
      {
        type: "Lend",
        price: 450000,
        transName: "Giày",
        info: "Hoàng Nam trả "
      }
    ]
  },
  {
    title: "Tháng 10/2019",
    data: [
      {
        type: "Own",
        price: 50000,
        transName: "Bánh bao",
        info: "Bạn nợ "
      },
      {
        type: "Lend",
        price: 100000,
        transName: "Trà sữa",
        info: "K.Hào trả "
      }
    ]
  }
];

export function GroupDetailsScreen(props) {
  const renderItem = ({ item, index }) => {
    return (
        <TransactionItem item={item}/>
    );
  };

  const renderHeader = ({ section: { title } }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.titleHeader}>
          {title}
        </Text>
      </View>
    );
  };

  const navigateToGroupInfo = () => {
    props.navigation.navigate("GroupInfo");
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader
        rightIconName={"info"}
        onRightPress={navigateToGroupInfo}
        onLeftPress={goBack}
      />
      <ScrollView>
      <DetailCover name={'Tên nhóm'}>
        <SBButton
          buttonText={"TRẢ NỢ"}
          buttonStyle={styles.buttonStyle}
          textStyle={[styles.buttonTextStyle]}
        />
        <SBButton
          buttonText={"SỐ DƯ"}
          buttonStyle={styles.buttonStyle}
          textStyle={[styles.buttonTextStyle]}
        />
      </DetailCover>

      <View style={styles.blockSectionList}>
        <SwipeListView
          useSectionList
          style={{ flex: 1 }}
          initialNumToRender={10}
          leftOpenValue={0}
          disableRightSwipe={true}
          rightOpenValue={-87}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.swipeoutContainer}>
              <TouchableOpacity style={[styles.swipeoutBtn, { backgroundColor: colors.subTitle }]}>
                <SBIconFont name={'edit'} color={colors.white} size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.swipeoutBtn, { backgroundColor: colors.red }]}>
                <SBIconFont name={'delete'} color={colors.white} size={20} />
              </TouchableOpacity>
            </View>
          )}
          sections={data}
          stickySectionHeadersEnabled={false}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
        />

      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center"
  },
  buttonStyle: {
    backgroundColor: colors.main,
    width: 120,
    height: 30,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTextStyle: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    alignSelf: "center"
  },
  blockSectionList: {
    flex: 1,
    width,
    marginTop: 28
    // backgroundColor:'red'
  },
  header: {
    width,
    height: 20,
    backgroundColor: colors.block,
    justifyContent: "center"
  },
  titleHeader: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white,
    paddingLeft: 10
  },
  swipeoutContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 87,
    flex: 1,
    alignSelf: 'flex-end',
  },
  swipeoutBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
  }
});
