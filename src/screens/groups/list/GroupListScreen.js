import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { colors } from "../../../utils/color";
import { defineValue } from "../../../utils/defineValue";
import { FONT_FAMILY } from "../../../utils/const";
import { SBIconFont, SBHeader } from "../../../components/SBComponent";
import TouchableListItem from "../../../components/TouchableListItem";
import TabSummary from "../../../components/TabSummary";
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
export function GroupListScreen(props) {

  const navigateToGroupDetails = () => {
    props.navigation.navigate('GroupDetails')
  }

  const navigateToCreateGroup = () => {
    props.navigation.navigate('CreateGroup')
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableListItem
        onPress={navigateToGroupDetails}
        title={item.groupName}
      >
        <View style={{ flexDirection: "row", }}>
          {item.type === defineValue.Lend
            ? <Text style={styles.subTitle}>Bạn cho mượn<Text style={{ color: colors.mainLight }}> {item.quantity}</Text></Text>
            : <Text style={styles.subTitle}>Bạn mượn<Text style={{ color: colors.orange }}> {item.quantity}</Text></Text>
          }
          <SBIconFont style={{ marginLeft: 5 }} name='info-outline' size={14} color={colors.white} />
        </View>
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
        rightText={'Tạo nhóm'}
        onRightPress={navigateToCreateGroup}
      />

      <View style={styles.menuStyles}>
        <Text style={styles.title}>Nhóm</Text>
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
