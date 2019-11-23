import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  View,
  Image,
  FlatList
} from "react-native";
import { colors } from "../utils/color";
import CustomButton from "../components/button/CustomButton";
import { defineValue } from "../utils/defineValue";
const { width, height } = Dimensions.get("screen");
const data = [
  {
    type: "Own",
    quantity: 500000,
    groupName: "Đài loan"
  },
  {
    type: "Lend",
    quantity: 4500000,
    groupName: "Thái lan"
  }
];
export function ListGroup(props) {
  const renderItem = ({ index, item }) => {
    return (
      <View style={styles.itemStyles}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/background.png")}
        />
        <View>
          <Text style={styles.groupName}>
            {item.groupName}
          </Text>
          <Text style={styles.groupInfo}>
            {item.type === defineValue.Lend ?`Bạn cho mượn ${item.quantity}` :`Bạn nợ ${item.quantity}` }
            
          </Text>
        </View>
      </View>
    );
  };
  const itemSeparator = () => {
    return <View style={styles.itemSeparatorStyles} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuStyles}>
        <Image
          style={styles.searchIcon}
          source={require("../assets/images/background.png")}
        />
      </View>
      <View style={styles.menuStyles}>
        <Text style={styles.title}>Nhóm</Text>
      </View>
      <View style={styles.block}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/background.png")}
        />
        <View>
          <Text style={[styles.info, { fontSize: 15 }]}>TỔNG SỐ DƯ</Text>
          <Text style={[styles.info, { fontSize: 15,color:colors.orange }]}>
            Bạn nợ: 5.000.000đ
          </Text>
          <Text style={[styles.info, { fontSize: 15,color:colors.mainLight }]}>
            Bạn cho mượn: 5.000.000đ
          </Text>
        </View>
      </View>
      <View style={styles.listStyles}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={index => String(index)}
          ItemSeparatorComponent={itemSeparator}
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
  backgroundStyles: { flex: 1, alignItems: "center" },
  menuStyles: {
    height: height * 0.06,
    width
  },
  title: {
    marginLeft: width * 0.02,
    //fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  searchIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginLeft: width * 0.02
  },
  block: {
    borderRadius: 20,
    backgroundColor: colors.block,
    width: width * 0.94,
    height: height * 0.13,
    marginTop: height * 0.02,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  avatar: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.8,
    marginLeft: width * 0.04,
    marginRight: width * 0.044
  },
  info: {
    //fontFamily: "Roboto",
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  itemStyles: {
    width: width,
    height: height * 0.09,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5
  },
  listStyles: {
    marginTop: height * 0.02
  },
  itemSeparatorStyles: {
    width: width * 0.95,
    height: 0.1,
    borderStyle: "solid",
    borderWidth: 0.7,
    borderColor: colors.line,
    alignSelf: "flex-end"
  },
  groupName:{
    color:colors.white
  },
  groupInfo:{

  }
});
