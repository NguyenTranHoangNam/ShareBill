import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Switch
} from "react-native";
import { colors } from "../../../utils/color";
import { SBHeader, SBSwitch } from "../../../components/SBComponent";
import { FONT_FAMILY } from "../../../utils/const";
const { width, height } = Dimensions.get("screen");
export function NotiSettingsScreen(props) {
  const [notiWhenAddToGroup, setNotiWhenAddToGroup] = useState(true);
  const [notiWhenAddFriend, setNotiWhenAddFriend] = useState(true);
  const [notiWhenAddTransaction, setNotiWhenAddTransaction] = useState(true);
  const [notiWhenUpdateTransaction, setNotiWhenUpdateTransaction] = useState(
    true
  );
  const [notiWhenAnswerTransaction, setNotiWhenAnswerTransaction] = useState(
    true
  );

  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={goBack} title={"Thông báo"} />
      <View style={styles.header}>
        <Text style={styles.titleHeader}>NHÓM VÀ BẠN BÈ</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>Khi ai đó thêm tôi vào nhóm</Text>
        <View style={styles.switchContainer}>
          <SBSwitch
            value={notiWhenAddToGroup}
            onValueChange={() => setNotiWhenAddToGroup(!notiWhenAddToGroup)}
            style={styles.switchStyles}
          />
        </View>
      </View>
      <View style={styles.itemSeparatorStyles} />
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>Khi ai đó thêm bạn với tôi</Text>
        <View style={styles.switchContainer}>
          <SBSwitch
            value={notiWhenAddFriend}
            onValueChange={() => setNotiWhenAddFriend(!notiWhenAddFriend)}
            style={styles.switchStyles}
          />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>CHI TIÊU</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>Khi có chi tiêu được thêm</Text>
        <View style={styles.switchContainer}>
          <SBSwitch
            value={notiWhenAddTransaction}
            onValueChange={() =>
              setNotiWhenAddTransaction(!notiWhenAddTransaction)}
            style={styles.switchStyles}
          />
        </View>
      </View>
      <View style={styles.itemSeparatorStyles} />
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>
          Khi có chi tiêu được chỉnh sửa/xoá
        </Text>
        <View style={styles.switchContainer}>
          <SBSwitch
            value={notiWhenUpdateTransaction}
            onValueChange={() =>
              setNotiWhenUpdateTransaction(!notiWhenUpdateTransaction)}
            style={styles.switchStyles}
          />
        </View>
      </View>
      <View style={styles.itemSeparatorStyles} />
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>Khi ai đó trả lời vào chi tiêu</Text>
        <View style={styles.switchContainer}>
          <SBSwitch
            value={notiWhenAnswerTransaction}
            onValueChange={() =>
              setNotiWhenAnswerTransaction(!notiWhenAnswerTransaction)}
            style={styles.switchStyles}
          />
        </View>
      </View>
      <View
        style={[styles.itemSeparatorStyles, styles.enddingItemSeparatorStyles]}
      />
      <View style={styles.blockSave}>
        <SBButton
          buttonStyle={styles.saveButton}
          buttonText={"LƯU THÔNG TIN"}
          textStyle={styles.saveTitle}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    width,
    height: 20,
    backgroundColor: colors.block,
    justifyContent: "center",
    marginBottom: 17
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
  itemSeparatorStyles: {
    width: width - 20,
    height: 0.1,
    borderStyle: "solid",
    borderWidth: 0.7,
    borderColor: colors.line,
    alignSelf: "flex-end",
    marginBottom: 17
  },
  enddingItemSeparatorStyles: {
    width: width
  },
  switchContainer: {
    flex: 1,
    alignContent: "flex-end"
  },
  contentContainer: {
    flexDirection: "row",
    marginBottom: 17
  },
  titleStyles: {
    color: colors.white,
    marginLeft: 20,
    fontSize: 13,
    fontFamily: FONT_FAMILY
  },
  saveButton: {
    backgroundColor: colors.mainLight,
    borderRadius: 23
  },
  blockSave: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  switchStyles: { alignSelf: "flex-end", marginRight: 14 }
});
