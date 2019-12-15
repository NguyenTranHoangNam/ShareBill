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
import { FONT_FAMILY, BORDER_WIDTH } from "../../../utils/const";
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

  const renderItem = ({ item, index}) => {
    return (
      <TouchableListItem
        onPress={navigateToGroupDetails}
        title={item.groupName}
        index={index}
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

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader
        leftIconName={'search'}
        rightText={'Tạo nhóm'}
        onRightPress={navigateToCreateGroup}
      />

      <TabSummary />

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        renderItem={renderItem}
        keyExtractor={index => String(index)}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainerStyle: {
    paddingLeft: 20, 
    borderBottomWidth: BORDER_WIDTH,
    borderBottomColor: colors.line
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
