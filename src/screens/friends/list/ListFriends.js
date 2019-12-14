import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  View,
  Image,
  FlatList,
} from "react-native";
import { colors } from "../../../utils/color";
import { defineValue } from "../../../utils/defineValue";
import { FONT_FAMILY } from "../../../utils/const";
import { SBIconFont, SBHeader } from "../../../components/SBComponent";
import TabSummary from "../../../components/TabSummary";
const data = [
  {
    friendName: "Kiên Hào",
    info: [
      {
        type: "Own",
        quantity: 500000
      },
      {
        type: "Lend",
        quantity: 4500000
      }
    ]
  },
  {
    friendName: "Hoàng Nam",
    info: null
  }
];
export function ListFriendsScreen(props) {
  const navigateToGroupDetails = () => {
    props.navigation.navigate('FriendInfo')
  };

  const renderItem = ({ index, item }) => {
    return (
      <TouchableListItem
        onPress={navigateToGroupDetails}
        title={item.friendName}
      >
        {item.info &&
          item.info.map(data => {
            return (
              <View style={{ flexDirection: "row", }}>
                {data.type === defineValue.Lend
                  ? <Text style={styles.subTitle}>Bạn cho mượn<Text style={{ color: colors.mainLight }}> {data.quantity}</Text></Text>
                  : <Text style={styles.subTitle}>Bạn mượn<Text style={{ color: colors.orange }}> {data.quantity}</Text></Text>}
                <SBIconFont
                  style={{ marginLeft: 5 }}
                  name={"info-outline"}
                  size={14}
                  color={colors.white}
                />
              </View>
            );
          })}
      </TouchableListItem>
    );
  };
  const itemSeparator = () => {
    return <View style={styles.itemSeparatorStyles} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader 
        leftIconName={'search'} 
        rightText={"Thêm bạn"} 
      />

      <View style={styles.menuStyles}>
        <Text style={styles.title}>Bạn bè</Text>
      </View>

      <TabSummary />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={index => String(index)}
        ItemSeparatorComponent={itemSeparator}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  menuStyles: {
    height: 47,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: FONT_FAMILY,
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  itemSeparatorStyles: {
    width: '100%',
    height: 0.7,
    backgroundColor: colors.line,
  },
  subTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
});
