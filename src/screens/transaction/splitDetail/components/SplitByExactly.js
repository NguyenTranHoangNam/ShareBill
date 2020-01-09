import React, { useState, useEffect } from "react";
import {
  View, SafeAreaView, Text, FlatList,
} from "react-native";
import { styles } from './SplitBy.style';
import { SBTextInput } from "../../../../components/SBComponent";
import Avatar from '../../../../components/Avatar';
import Utils from "../../../../utils/utils";
import _ from 'lodash';

const SplitByExactly = ({ amount, members }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [membersOfGroup, setMembersOfGroup] = useState(members);

  useEffect(() => {
    setTotalAmount(membersOfGroup.reduce((accumulator, currentValue) => (accumulator + currentValue.mustPay), 0))
  }, [])

  const onPayerAmountChange = (value, payer) => {
    payer['mustPay'] = parseFloat(value);
    setTotalAmount(membersOfGroup.reduce((accumulator, currentValue) => (accumulator + currentValue.mustPay), 0))
    setMembersOfGroup(_.clone(membersOfGroup));
  }

  const renderItem = ({ item: payer }) => {
    return (
      <View style={styles.rowStyles}>
        <Avatar name={payer.fullname} size={40} />
        <Text style={styles.memberStyles}>{payer.fullname}</Text>
        <View style={styles.inputAmountContainer}>
          <SBTextInput
            style={styles.inputAmount}
            value={`${payer.mustPay}`}
            onChangeText={(value) => onPayerAmountChange(value, payer)}
            placeholder={'0.000'}
          />
          <Text style={styles.unit}>đ</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return `${index}`;
  }

  console.log('render')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pagerSummaryContainer}>
        <Text style={styles.summaryTilte}>{Utils.formatMoney(totalAmount, 0, 'đ')} trên {Utils.formatMoney(amount, 0, 'đ')}</Text>
        <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>còn {Utils.formatMoney(parseFloat(amount) - parseFloat(totalAmount), 0, 'đ')}</Text>
      </View>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={membersOfGroup}
      />
    </SafeAreaView>
  );
};

export default React.memo(SplitByExactly);