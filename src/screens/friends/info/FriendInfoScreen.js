import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  FlatList,
  Image
} from "react-native";
import { colors } from "../../../utils/color";
import { FONT_FAMILY, BORDER_WIDTH } from "../../../utils/const";
import Avatar from "../../../components/Avatar";
import SBHeader from "../../../components/SBComponents/SBHeader";
import SBButton from "../../../components/SBComponents/SBButton";
import { SBIconFont } from "../../../components/SBComponent";
import { defineValue } from "../../../utils/defineValue";
import DetailCover from "../../../components/DetailCover";
import TouchableListItem from "../../../components/TouchableListItem";
import { useSelector, useDispatch } from "react-redux";
import { getFriendGroups } from "../../../redux/friend/friend.action";
const { width, height } = Dimensions.get("screen");

export function FriendInfoScreen(props) {
  const { friendSelected } = props.navigation.state.params;
  const {friendGroups} = useSelector(state => state.friend);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getFriendGroups(friendSelected))
  },[])
  const goBack = () => {
    props.navigation.goBack();
  };

  const navigateToGroupDetails = (groupSelected) => {
    props.navigation.navigate("GroupDetails",{groupSelected});
  };
  const renderItem = ({ item, index }) => {
    return (
      <TouchableListItem
        onPress={navigateToGroupDetails.bind(null,item)}
        // onPress={()=>{alert(JSON.stringify(item))}}
        title={item.name}
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
      <SBHeader onLeftPress={goBack} rightText={"Huỷ kết bạn"} />
      
      <DetailCover name={friendSelected.fullname}>
        <SBButton
          buttonStyle={styles.buttonStyle}
          buttonText={"TRẢ NỢ"}
          textStyle={styles.buttonTextStyle}
        />
      </DetailCover>

      <FlatList contentContainerStyle={styles.contentContainerStyle} data={friendGroups} renderItem={renderItem} />
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
  buttonStyle: {
    backgroundColor: colors.main,
    width: 120,
    height: 30,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTextStyle: {
    fontFamily: FONT_FAMILY,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.white,
    alignSelf: "center"
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
