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

export const SplitByShares = ({ amount, payers, members }) => {
  const [checkingPayers, setCheckingPayers] = useState(payers);
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowStyles}>
        <Avatar name={item.fullname} size={40} />
        <Text style={styles.memberStyles}>{item.fullname}</Text>
        <View style={styles.inputAmountContainer}>
          <SBTextInput
            style={styles.inputAmount}
            placeholder={'1'}
          />
          <Text style={styles.unit}>phần</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return `${index}`;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pagerSummaryContainer}>
        <Text style={styles.summaryTilte}>Tổng cộng 1 phần</Text>
      </View>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={members}
      />
    </SafeAreaView>
  );
};

export default React.memo(SplitByShares);