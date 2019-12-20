import React from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { colors } from "../../utils/color";
import { SBIconFont } from "../../components/SBComponent";
import { SCREEN_WIDTH } from "../../utils/const";
const TabBar = props => {
  const {
    navigation: { state: { index, routes } },
    style,
    renderIcon,
    jumpTo,
  } = props;

  const getColor = (index, idx, route, props) => {
    const { tabFeatured, activeTintColor, activeFeaturedTintColor, inactiveTintColor, inactiveFeatureTintColor } = props;
    if (index === idx) {
      if (route.key !== tabFeatured) {
        return activeTintColor
      }
      return activeFeaturedTintColor
    } else {
      if (route.key !== tabFeatured) {
        return inactiveTintColor
      }
      return inactiveFeatureTintColor
    }
  }
  
  const onAddTransPress = (tabName) => {
    console.log('fromTab', tabName);
    props.navigation.navigate("Giao dịch", { fromTab: tabName })
  }

  return (
    <SafeAreaView style={[styles.tabbarContainer, { ...style }]}>
      {routes.map(
        (route, idx) =>
          route.key != "Giao dịch"
            ?
            <TouchableOpacity activeOpacity={1} style={styles.tabButtonContainer} onPress={() => jumpTo(route.key)}>
              <View style={styles.iconContainer}>
                {renderIcon({
                  route,
                  focused: index === idx,
                  tintColor: getColor(index, idx, route, props)
                })}
              </View>
              <Text style={[styles.labelStyles, { color: getColor(index, idx, route, props) }]} >
                {route.key}
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity activeOpacity={1} style={[styles.tabButtonContainer, { justifyContent: 'flex-end' }]} onPress={() => onAddTransPress(routes[index].key)}>
              <View style={styles.addButtonFirstContainer}>
                <View style={styles.addButtonSecondContainer}>
                  <SBIconFont
                    name="add"
                    color={colors.white}
                    size={30}
                  />
                </View>
              </View>
            </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  labelStyles: {
    fontSize: 11
  },
  tabbarContainer: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    backgroundColor: colors.tabbar,
  },
  tabButtonContainer: {
    width: SCREEN_WIDTH / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonFirstContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  addButtonSecondContainer: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: colors.mainLight,
    alignItems: "center",
    justifyContent: "center"
  },
  addButtonContainer: {
    // marginBottom: 45
  }


});

export default TabBar;
