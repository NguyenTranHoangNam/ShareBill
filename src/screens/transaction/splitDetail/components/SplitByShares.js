import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import { styles } from './SplitBy.style';
import { SBTextInput } from "../../../../components/SBComponent";
import Avatar from '../../../../components/Avatar';
import Utils from "../../../../utils/utils";
import _ from 'lodash';

export const SplitByShares = ({ amount, members }) => {
  const [totalShare, setTotalShare] = useState(0);
  const [membersOfGroup, setMembersOfGroup] = useState(members);
  const [shares, setShares] = useState([]);

  useEffect(() => {
    let mustPayArray = [];
    membersOfGroup.map(member => mustPayArray.push(parseFloat(member.mustPay)));
    let gcd = Utils.gcdArray(mustPayArray);
    membersOfGroup.map(member => shares.push(parseFloat(member.mustPay) / gcd));
    setTotalShare(shares.reduce((accumulator, currentValue) => (parseFloat(accumulator || 0) + parseFloat(currentValue || 0))));
    setShares(shares);
  }, [])

  const onShareChange = (value, index) => {
    shares[index] = value;
    let total = shares.reduce((accumulator, currentValue) => (parseFloat(accumulator || 0) + parseFloat(currentValue || 0)));
    membersOfGroup.map((member, index) => member['mustPay'] = shares[index] * amount / total)
    setShares(shares);
    setTotalShare(total);
    setMembersOfGroup(_.clone(membersOfGroup));
  }
  
  const renderItem = ({ item: payer, index }) => {
    return (
      <View style={styles.rowStyles}>
        <Avatar name={payer.fullname} size={40} />
        <Text style={styles.memberStyles}>{payer.fullname}</Text>
        <View style={styles.inputAmountContainer}>
          <SBTextInput
            style={styles.inputAmount}
            value={`${shares[index]}`}
            onChangeText={(value) => onShareChange(value, index)}
            placeholder={'0'}
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
        <Text style={styles.summaryTilte}>Tổng cộng {totalShare} phần</Text>
      </View>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={membersOfGroup}
      />
    </SafeAreaView>
  );
};

export default React.memo(SplitByShares);