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
import { useSelector, useDispatch } from "react-redux";

export function GroupListScreen(props) {

  const navigateToGroupDetails = (groupSelected) => {
    props.navigation.navigate('GroupDetails',{groupSelected})
  }

  const navigateToCreateGroup = () => {
    props.navigation.navigate('CreateGroup')
  }
  const {listGroups} = useSelector(state =>state.group);
  const dispatch = useDispatch();
  const renderItem = ({ item, index}) => {
    return (
      <TouchableListItem
        onPress={navigateToGroupDetails.bind(null,item)}
        title={item.name}
        index={index}
      >
        <View style={{ flexDirection: "row", }}>
          {item.type === defineValue.Lend
            ? <Text style={styles.subTitle}>Bạn cho mượn<Text style={{ color: colors.mainLight }}> 5000</Text></Text>
            : <Text style={styles.subTitle}>Bạn mượn<Text style={{ color: colors.orange }}> 5000</Text></Text>
          }
          <SBIconFont style={{ marginLeft: 5 }} name='info-outline' size={14} color={colors.white} />
        </View>
      </TouchableListItem>
    );
  };

  const onHeaderIconPress = (index) => {
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader 
        type='tab'
        tabTitle={'Nhóm'}
        icons={['group-add', 'search']}
        onIconPress={onHeaderIconPress}
      />

      <TabSummary />

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={listGroups}
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
