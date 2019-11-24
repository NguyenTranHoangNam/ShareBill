import React, { Component } from 'react';
import { View } from "react-native"

export const CustomTabNavigation = (props) => {
  const { navigationState, navigation, position } = props
  return (
    <View style={{
      height: 80,
      backgroundColor: 'seashell',
      flexDirection: "row",
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
    {navigationState.routes.map((route, index) => {
      const focusAnim = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 0]
      })
      return (
        <View/>
      )
    })}
    </View>
  )
}
