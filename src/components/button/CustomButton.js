import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
const CustomButton = ({ title = "", onPress, style = {},titleStyles }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={titleStyles}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  titleStyles: {
    flex: 1
  }
});
export default CustomButton;
