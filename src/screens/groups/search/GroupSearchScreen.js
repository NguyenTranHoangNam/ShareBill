import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  View,
  FlatList
} from "react-native";
import { colors } from "../../../utils/color";
import { defineValue } from "../../../utils/defineValue";
import { FONT_FAMILY, BORDER_WIDTH } from "../../../utils/const";
import {
  SBIconFont,
  SBHeader,
  SBTextInput
} from "../../../components/SBComponent";
import TouchableListItem from "../../../components/TouchableListItem";
import { useSelector, useDispatch } from "react-redux";
import Utils from "../../../utils/utils";

export function GroupSearchScreen(props) {
  const { listGroups } = useSelector(state => state.group);
  const [keyword, setKeyword] = useState("");
  const [groupsResult, setGroupsResult] = useState(listGroups);
  const navigateToGroupDetails = groupSelected => {
    props.navigation.navigate("GroupDetails", { groupSelected });
  };

  const goBack = () => {
    props.navigation.goBack();
  };
  const onChangeText = groupName => {
    const groupsFilter = listGroups.filter(group => {
      return Utils.removeAccentsCharacter(group.name).includes(
        Utils.removeAccentsCharacter(groupName)
      );
    });
    setGroupsResult(groupsFilter);
  };
  const renderItem = ({ item, index }) => {
    return (
      <TouchableListItem
        onPress={navigateToGroupDetails.bind(null, item)}
        title={item.name}
        index={index}
      >
        <View style={{ flexDirection: "row" }}>
          {item.type === defineValue.Lend
            ? <Text style={styles.subTitle}>
                Bạn cho mượn<Text style={{ color: colors.mainLight }}>
                  {" "}5000
                </Text>
              </Text>
            : <Text style={styles.subTitle}>
                Bạn mượn<Text style={{ color: colors.orange }}> 5000</Text>
              </Text>}
          <SBIconFont
            style={{ marginLeft: 5 }}
            name="info-outline"
            size={14}
            color={colors.white}
          />
        </View>
      </TouchableListItem>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader
        type={"input"}
        placeholder={"Tên nhóm"}
        onChangeText={onChangeText}
        onIconPress={goBack}
      />

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={groupsResult}
        extraData={groupsResult}
        renderItem={renderItem}
        keyExtractor={index => String(index)}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
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
  }
});
