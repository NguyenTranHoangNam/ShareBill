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
import { SBHeader } from "../../../components/SBComponent";
import { FONT_FAMILY } from "../../../utils/const";
const { width, height } = Dimensions.get("screen");
export function NotiSettingsScreen(props) {
  const [notiWhenAddToGroup, setNotiWhenAddToGroup] = useState(true);
  const [notiWhenAddFriend, setNotiWhenAddFriend] = useState(true);
  const [notiWhenAddTransaction, setNotiWhenAddTransaction] = useState(true);
  const [notiWhenUpdateTransaction, setNotiWhenUpdateTransaction] = useState(true);
  const [notiWhenAnswerTransaction, setNotiWhenAnswerTransaction] = useState(
    true
  );
  return (
    <SafeAreaView style={styles.container}>
      <SBHeader title={"Thông báo"} />
      <View style={styles.header}>
        <Text style={styles.titleHeader}>NHÓM VÀ BẠN BÈ</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>Khi ai đó thêm tôi vào nhóm</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={notiWhenAddToGroup}
            onValueChange={() => setNotiWhenAddToGroup(!notiWhenAddToGroup)}
          />
        </View>
      </View>
      <View style={styles.itemSeparatorStyles} />
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>Khi ai đó thêm bạn với tôi</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={notiWhenAddFriend}
            onValueChange={() => setNotiWhenAddFriend(!notiWhenAddFriend)}
          />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>CHI TIÊU</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>Khi có chi tiêu được thêm</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={notiWhenAddTransaction}
            onValueChange={() => setNotiWhenAddTransaction(!notiWhenAddTransaction)}
          />
        </View>
      </View>
      <View style={styles.itemSeparatorStyles} />
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>
          Khi có chi tiêu được chỉnh sửa/xoá
        </Text>
        <View style={styles.switchContainer}>
          <Switch
            value={notiWhenUpdateTransaction}
            onValueChange={() => setNotiWhenUpdateTransaction(!notiWhenUpdateTransaction)}
          />
        </View>
      </View>
      <View style={styles.itemSeparatorStyles} />
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyles}>Khi ai đó trả lời vào chi tiêu</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={notiWhenAnswerTransaction}
            onValueChange={() => setNotiWhenAnswerTransaction(!notiWhenAnswerTransaction)}
          />
        </View>
      </View>
      <View
        style={[styles.itemSeparatorStyles, styles.enddingItemSeparatorStyles]}
      />
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
  }
});
