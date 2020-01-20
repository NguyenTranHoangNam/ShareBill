import React, { useState, useEffect, useRef } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  FlatList,
  Keyboard
} from "react-native";
import { colors } from "../../../utils/color";
import { FONT_FAMILY } from "../../../utils/const";
import Avatar from "../../../components/Avatar";
import SBHeader from "../../../components/SBComponents/SBHeader";
import SBButton from "../../../components/SBComponents/SBButton";
import { SBIconFont, SBTextInput } from "../../../components/SBComponent";
import { ModalAddMember } from "../addMember/modal/ModalAddMember";
import { useSelector, useDispatch } from "react-redux";
import TouchableListItem from "../../../components/TouchableListItem";
const { width, height } = Dimensions.get("screen");

const data = [
  {
    key: "0",
    avatar: "",
    name: "Lương Kiên Hào",
    numberPhone: "123456789"
  },
  {
    key: "1",
    avatar: "",
    name: "Nguyễn Trần Hoàng Nam",
    numberPhone: "112233445"
  },
  {
    key: "2",
    avatar: "",
    name: "Nguyễn Trần Hoàng Nam",
    numberPhone: "112233445"
  }
];

export function GroupAddScreen(props) {
  const goBack = () => {
    props.navigation.goBack();
  };

  const {listFriends} = useSelector(state => state.friend);

  const modalAddMember = useRef();

  const addMember = () => {
    console.log(modalAddMember);
    // modalAddMember.current.alertaa()
  };

  const dismissKeyboard=() => {
    Keyboard.dismiss();
  }

  const renderItem = ({ index, item }) => {
    return (
      <TouchableListItem
        onPress={()=>{console.log(item)}}
        title={item}
        index={index}
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
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={dismissKeyboard}
      >
        <SBHeader onLeftPress={goBack} />
        <View style={{ width, alignItems: "center" }}>
          <Avatar
            name={"default"}
            source={require("../../../assets/images/background.png")}
          />
          <View style={{ marginLeft: 133, marginRight: 133 }}>
            <SBTextInput
              style={styles.groupName}
              placeholder={"Tên nhóm"}
              autoFocus
            />
          </View>
          <Text style={styles.countMember}>2 thành viên</Text>
        </View>
        <View style={styles.blockIcon}>
          <TouchableOpacity onPress={addMember}>
            <View style={styles.circleIcon}>
              <SBIconFont name={"person-add"} color={colors.white} size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.headerList}>
          <Text style={styles.titleHeader}>Thành viên nhóm</Text>
        </View>
        <FlatList data={listFriends} renderItem={renderItem} />
        {/* <SBSwipeListView
        leftIconName={"create"}
        rightIconName={"delete"}
        useFlatList
        data={data}
        renderItem={renderItem}
      /> */}
        <View style={styles.blockSave}>
          <SBButton
            buttonStyle={styles.saveButton}
            buttonText={"LƯU THÔNG TIN"}
            textStyle={styles.saveTitle}
          />
        </View>
        <ModalAddMember ref={modalAddMember} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
    // alignItems: "center"
  },
  groupName: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.subTitle,
    paddingBottom: 1
  },
  circleIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.subTitle,
    justifyContent: "center",
    alignItems: "center"
  },
  countMember: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.subTitle,
    marginTop: 5
  },
  blockIcon: {
    flexDirection: "row",
    marginLeft: 105,
    marginRight: 105,
    justifyContent: "space-around",
    marginTop: 15
  },
  headerList: {
    width,
    height: 20,
    justifyContent: "center",
    marginTop: 25
  },
  titleHeader: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.subTitle,
    paddingLeft: 10
  },
  memberName: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white
  },
  memberNumberPhone: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.subTitle
  },
  saveTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white
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
  rowFront: {
    alignItems: "center",
    backgroundColor: colors.background,
    justifyContent: "center"
    // height: 50
  }
});
