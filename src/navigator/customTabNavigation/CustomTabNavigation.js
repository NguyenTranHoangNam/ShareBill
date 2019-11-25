import React from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Dimensions
} from "react-native";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../utils/color";
const { width, height } = Dimensions.get("screen");
const TabBar = props => {
  const {
    navigation: { state: { index, routes } },
    style,
    activeTintColor,
    inactiveTintColor,
    renderIcon,
    jumpTo,
    backgroundFeaturedIcon,
    tabFeatured,
    activeFeaturedTintColor,
    inactiveFeatureTintColor
  } = props;
  return (
    <SafeAreaView style={[styles.tabbarContainer, { ...style }]}>
      {routes.map(
        (route, idx) =>
          route.key != "Giao dịch"
            ? <SafeAreaView
                key={route.key}
                style={{
                  width: width / 5,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <TouchableWithoutFeedback onPress={() => jumpTo(route.key)}>
                  <View>
                  <View style={styles.iconContainer}>
                    {renderIcon({
                      route,
                      focused: index === idx,
                      tintColor:
                        index === idx
                          ? route.key !== tabFeatured
                            ? activeTintColor
                            : activeFeaturedTintColor
                          : route.key !== tabFeatured
                            ? inactiveTintColor
                            : inactiveFeatureTintColor
                    })}
                  </View>
                  <Text
                    style={[
                      styles.labelStyles,
                      {
                        color:
                          index === idx
                            ? route.key !== tabFeatured
                              ? activeTintColor
                              : activeFeaturedTintColor
                            : route.key !== tabFeatured
                              ? inactiveTintColor
                              : inactiveFeatureTintColor
                      }
                    ]}
                  >
                    {route.key}
                  </Text>
                  </View>
                </TouchableWithoutFeedback>
              </SafeAreaView>
            : <SafeAreaView
                key={route.key}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 45
                }}
              >
                <TouchableWithoutFeedback onPress={() => jumpTo(route.key)}>
                  <View
                    style={{
                      width: 65,
                      height: 65,
                      borderRadius: 32.5,
                      backgroundColor: colors.background,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <View
                      style={{
                        width: 55,
                        height: 55,
                        borderRadius: 27.5,
                        backgroundColor: colors.mainLight,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <IconMaterialIcons
                        name="add"
                        color={colors.white}
                        size={30}
                      />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </SafeAreaView>
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
    backgroundColor: colors.tabbar
  }
});

export default TabBar;
