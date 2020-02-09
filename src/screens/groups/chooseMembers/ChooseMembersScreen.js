import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import { colors } from "../../../utils/color";
import { FONT_FAMILY, BORDER_WIDTH } from "../../../utils/const";
import SBHeader from "../../../components/SBComponents/SBHeader";
import { useSelector, useDispatch } from "react-redux";
import Utils from "../../../utils/utils";
import Avatar from "../../../components/Avatar";
import { SBIconFont } from "../../../components/SBComponent";
import SBCheckbox from "../../../components/SBComponents/SBCheckbox";
const { width, height } = Dimensions.get("screen");

export function ChooseMembersScreen(props) {
  
  const { listMembers,getListMembersChose } = props.navigation.state.params;
  const { listFriends } = useSelector(state => state.friend);
  const [listMembersResult, setListMembersResult] = useState(listFriends);
  const [listMembersChose, setListMembersChose] = useState(listMembers);

  const goBack = () => {
    getListMembersChose(listMembersChose)
    props.navigation.goBack();
  };

  const onChangeText = memberName => {
    const listMembersFilter = listFriends.filter(friend => {
      return Utils.removeAccentsCharacter(friend).includes(
        Utils.removeAccentsCharacter(memberName)
      );
    });
    setListMembersResult(listMembersFilter);
  };

  const onCheckBoxChanged = item => {
    const isChoseMember = listMembersChose.includes(item)
    if (isChoseMember) {
      setListMembersChose(listMembersChose.filter(member => member !== item));
    } else {
      setListMembersChose([...listMembersChose, item]);
    }
  };

  const renderItem = ({ index, item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.rowMember,
          index !== 0
            ? { borderTopColor: colors.line, borderTopWidth: BORDER_WIDTH }
            : null
        ]}
        onPress={() => {
          console.log(item);
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar name={item} size={50} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {item}
            </Text>
          </View>
        </View>
        {/* <SBIconFont style={styles.arrowIcon} name={'chevron-right'} size={25} color={colors.white} /> */}
        <SBCheckbox onCheckedChange={onCheckBoxChanged.bind(null, item)} 
        checked={listMembers.includes(item)}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <SBHeader
        type={"input"}
        placeholder={"Tên bạn bè"}
        onChangeText={onChangeText}
        onIconPress={goBack}
      />
      <FlatList
        data={listMembersResult}
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
  titleContainer: {
    justifyContent: "space-between",
    marginLeft: 15
  },
  title: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  subTitleContainer: {},
  subTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.subTitle
  },
  rowMember: {
    width: "100%",
    flexDirection: "row",
    paddingRight: 5,
    paddingLeft: 5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between"
  }
});
