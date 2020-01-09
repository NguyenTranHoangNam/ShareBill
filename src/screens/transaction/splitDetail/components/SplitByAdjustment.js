import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
} from "react-native";
import { styles } from './SplitBy.style';
import { SBTextInput } from "../../../../components/SBComponent";
import Avatar from '../../../../components/Avatar';

const SplitByAdjustment = ({ amount, payers, members }) => {
  const [checkingPayers, setCheckingPayers] = useState(payers);
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowStyles}>
        <Avatar name={item.fullname} size={40} />
        <Text style={styles.memberStyles}>{item.fullname}</Text>
        <View style={styles.inputAmountContainer}>
          <Text style={styles.unit}>+</Text>
          <SBTextInput
            style={styles.inputAmount}
            placeholder={'0.000'}
          />
        </View>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return `${index}`;
  }
  
  return (
    <SafeAreaView style={styles.container}>
       <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={members}
      />
    </SafeAreaView>
  );
};

export default React.memo(SplitByAdjustment);