import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  SectionList
} from "react-native";
import { colors } from "../../../utils/color";
import { FONT_FAMILY } from "../../../utils/const";
import Avatar from "../../../components/Avatar";
import { defineValue } from "../../../utils/defineValue";
import SBHeader from "../../../components/SBComponents/SBHeader";
import { SBButton } from "../../../components/SBComponent";
import SwipeListView from "../../../components/SwipeList/SwipeListView";
const { width, height } = Dimensions.get("screen");

const data = [
  {
    title: "Tháng 09/2019",
    data: [
      {
        type: "Own",
        quantity: 500000,
        groupName: "Bánh kẹo",
        info: "Bạn nợ "
      },
      {
        type: "Lend",
        quantity: 450000,
        groupName: "Giày",
        info: "Hoàng Nam trả "
      }
    ]
  },
  {
    title: "Tháng 10/2019",
    data: [
      {
        type: "Own",
        quantity: 50000,
        groupName: "Bánh bao",
        info: "Bạn nợ "
      },
      {
        type: "Lend",
        quantity: 100000,
        groupName: "Trà sửa",
        info: "K.Hào trả "
      }
    ]
  }
];

export function GroupDetailsScreen(props) {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width,
          height: 60,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.background
        }}
      >
        <Avatar
          name={"default"}
          source={require("../../../assets/images/background.png")}
          size={40}
          style={{ borderRadius: 8, marginLeft: 20 }}
        />
        <View style={{ marginLeft: 35 }}>
          <Text
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 14,
              fontWeight: "bold",
              fontStyle: "normal",
              letterSpacing: 0,
              color: colors.white
            }}
          >
            {item.groupName}
          </Text>
          <Text
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 11,
              fontWeight: "normal",
              fontStyle: "normal",
              letterSpacing: 0,
              color: colors.subTitle
            }}
          >
            {item.info} {item.quantity}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {item.type === defineValue.Lend
            ? <View style={{ alignSelf: "flex-end", marginRight: 10 }}>
              <Text style={styles.info}>Bạn cho mượn</Text>
              <Text
                style={[
                  styles.info,
                  { color: colors.mainLight, alignSelf: "flex-end" }
                ]}
              >
                {" "}{item.quantity}
              </Text>
            </View>
            : <View style={{ alignSelf: "flex-end", marginRight: 10 }}>
              <Text style={styles.info}>Bạn mượn</Text>
              <Text
                style={[
                  styles.info,
                  { color: colors.orange, alignSelf: "flex-end" }
                ]}
              >
                {" "}{item.quantity}
              </Text>
            </View>}
        </View>
      </View>
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
      <Avatar
        name={"default"}
        source={require("../../../assets/images/background.png")}
      />
      <Text style={styles.groupName}>Tên Nhóm</Text>
      <Text style={styles.info}>
        Bạn nợ{" "}
        <Text style={[styles.info, { color: colors.orange }]}>500.000đ</Text>
      </Text>
      <View style={styles.blockButton}>
        <SBButton
          buttonText={"Trả nợ"}
          buttonStyle={styles.buttonStyles}
          textStyle={[styles.titleStyles]}
        />
        <SBButton
          buttonText={"Số dư"}
          buttonStyle={styles.buttonStyles}
          textStyle={[styles.titleStyles]}
        />
      </View>

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
              <TouchableOpacity style={[styles.swipeoutBtn, {backgroundColor: colors.subTitle}]}>
                <SBIconFont name={'edit'} color={colors.white} size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.swipeoutBtn, {backgroundColor: colors.red}]}>
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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center"
  },
  headerStyles: {
    height: 47,
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 150,
    marginRight: 150
  },
  groupName: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    marginTop: 10
  },
  info: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    marginTop: 5
  },
  buttonStyles: {
    backgroundColor: colors.main,
    width: 120,
    height: height * 0.041,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  titleStyles: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    alignSelf: "center"
  },
  blockButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    width,
    marginTop: 15
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
  info: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: colors.white
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
