import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from "react-native";
import SwipeListView from "../../../components/SBComponents/SBSwipeListView";
import SwipeRow from "../../../components/SBComponents/SBSwipeRow";
import { SBIconFont } from "../../../components/SBComponent";
import { colors } from "../../../utils/color";
import { FONT_FAMILY } from "../../../utils/const";
const { width, height } = Dimensions.get("screen");
class SBSwipeListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listType: "FlatList",
      listViewData: Array(20)
        .fill("")
        .map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
      sectionListData: Array(5).fill("").map((_, i) => ({
        title: `title${i + 1}`,
        data: [
          ...Array(5).fill("").map((_, j) => ({
            key: `${i}.${j}`,
            text: `item #${j}`
          }))
        ]
      }))
    };

    this.rowSwipeAnimatedValues = {};
    Array(props.data.length).fill("").forEach((_, i) => {
      this.rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });
  }

  closeRow(rowMap, rowKey) {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  }

  deleteRow(rowMap, rowKey) {
    this.closeRow(rowMap, rowKey);
    const newData = [...this.state.listViewData];
    const prevIndex = this.state.listViewData.findIndex(
      item => item.key === rowKey
    );
    newData.splice(prevIndex, 1);
    this.setState({ listViewData: newData });
  }

  deleteSectionRow(rowMap, rowKey) {
    this.closeRow(rowMap, rowKey);
    const [section] = rowKey.split(".");
    const newData = [...this.state.sectionListData];
    const prevIndex = this.state.sectionListData[section].data.findIndex(
      item => item.key === rowKey
    );
    newData[section].data.splice(prevIndex, 1);
    this.setState({ sectionListData: newData });
  }

  onRowDidOpen = rowKey => {
    console.log("This row opened", rowKey);
  };

  onSwipeValueChange = swipeData => {
    const { key, value } = swipeData;
    this.rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };
  renderHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => this.closeRow(rowMap, data.item.key)}
        >
          <View style={styles.circleIcon}>
            <SBIconFont name={"create"} color={colors.white} size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => this.deleteRow(rowMap, data.item.key)}
        >
          <Animated.View
            style={[
              styles.trash,
              {
                transform: [
                  {
                    scale: this.rowSwipeAnimatedValues[
                      data.item.key
                    ].interpolate({
                      inputRange: [45, 90],
                      outputRange: [0, 1],
                      extrapolate: "clamp"
                    })
                  }
                ]
              }
            ]}
          >
            <View style={[styles.circleIcon, { backgroundColor: "red" }]}>
              <SBIconFont name={"delete"} color={colors.white} size={20} />
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const {
      useFlatList,
      useAdvanced,
      useSectionList,
      data,
      renderItem
    } = this.props;
    return (
      <View style={styles.container}>
        {useFlatList &&
          <SwipeListView
            // data={this.state.listViewData}
            data={data}
            renderItem={item =>
              <TouchableHighlight
                onPress={() => console.log(item)}
                style={styles.rowFront}
                underlayColor={"#AAA"}
              >
                <View
                  style={{
                    width,
                    height: 60,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  
                >
                  <Avatar
                    name={"default"}
                    source={require("../../../assets/images/background.png")}
                    size={40}
                    style={{ borderRadius: 20, marginLeft: 20 }}
                  />
                  <View style={{ marginLeft: 35 }}>
                    <Text style={styles.memberName}>
                      {item.item.name}
                    </Text>
                    <Text style={styles.memberNumberPhone}>
                      {item.item.numberPhone}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            }
            // renderItem={renderItem}
            renderHiddenItem={this.renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-150}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={this.onRowDidOpen}
            onSwipeValueChange={this.onSwipeValueChange}
          />}

        {useAdvanced &&
          <SwipeListView
            data={this.state.listViewData}
            renderItem={(data, rowMap) =>
              <SwipeRow
                disableLeftSwipe={parseInt(data.item.key) % 2 === 0}
                leftOpenValue={20 + Math.random() * 150}
                rightOpenValue={-150}
              >
                <View style={styles.rowBack}>
                  <Text>Left</Text>
                  <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnLeft]}
                    onPress={() => this.closeRow(rowMap, data.item.key)}
                  >
                    <Text style={styles.backTextWhite}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={() => this.deleteRow(rowMap, data.item.key)}
                  >
                    <Text style={styles.backTextWhite}>Delete</Text>
                  </TouchableOpacity>
                </View>
                <TouchableHighlight
                  onPress={() => console.log("You touched me")}
                  style={styles.rowFront}
                  underlayColor={"#AAA"}
                >
                  <View>
                    <Text>
                      I am {data.item.text} in a SwipeListView
                    </Text>
                  </View>
                </TouchableHighlight>
              </SwipeRow>}
          />}

        {useSectionList &&
          <SwipeListView
            useSectionList
            sections={this.state.sectionListData}
            renderItem={data =>
              <TouchableHighlight
                onPress={() => console.log("You touched me")}
                style={styles.rowFront}
                underlayColor={"#AAA"}
              >
                <View>
                  <Text>
                    I am {data.item.text} in a SwipeListView
                  </Text>
                </View>
              </TouchableHighlight>}
            renderHiddenItem={(data, rowMap) =>
              <View style={styles.rowBack}>
                <Text>Left</Text>
                <TouchableOpacity
                  style={[styles.backRightBtn, styles.backRightBtnLeft]}
                  onPress={() => this.closeRow(rowMap, data.item.key)}
                >
                  <Text style={styles.backTextWhite}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.backRightBtn, styles.backRightBtnRight]}
                  onPress={() => this.deleteSectionRow(rowMap, data.item.key)}
                >
                  <Text style={styles.backTextWhite}>Delete</Text>
                </TouchableOpacity>
              </View>}
            renderSectionHeader={({ section }) =>
              <Text>
                {section.title}
              </Text>}
            leftOpenValue={75}
            rightOpenValue={-150}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={this.onRowDidOpen}
          />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  backTextWhite: {
    color: "#FFF"
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: colors.background,
    justifyContent: "center",
    height: 50
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 15
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75
  },
  backRightBtnLeft: {
    backgroundColor: colors.background,
    right: 75
  },
  backRightBtnRight: {
    backgroundColor: colors.background,
    right: 0
  },
  circleIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.subTitle,
    justifyContent: "center",
    alignItems: "center"
  },
  memberName: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "500",
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
});

export default SBSwipeListView;
