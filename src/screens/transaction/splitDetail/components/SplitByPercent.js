import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import { styles } from './SplitBy.style';
import { SBTextInput } from "../../../../components/SBComponent";
import Avatar from '../../../../components/Avatar';
import _ from 'lodash';

const SplitByPercent = ({ amount, members }) => {
  const [totalPercent, setTotalPercent] = useState(0);
  const [membersOfGroup, setMembersOfGroup] = useState(members);
  const [percents, setPercents] = useState([]);

  useEffect(() => {
    setTotalPercent(membersOfGroup.reduce((accumulator, currentValue) => (accumulator + currentValue.mustPay), 0) * 100 / amount);
    membersOfGroup.map(member => {
      if (member.mustPay){
        let percent = member.mustPay * 100 / amount;
        percents.push(`${percent}`);
      } else {
        percents.push(`${0}`);
      }
    })
    setPercents(percents);
  }, [])

  const onPayerPercentChange = (value, payer, index) => {
    let percent = parseFloat(value);
    let mustPay = percent * amount / 100;
    payer['mustPay'] = mustPay;
    percents[index] = value;
    setPercents(percents);
    setTotalPercent(percents.reduce((accumulator, currentValue) => (parseFloat(accumulator || 0) + parseFloat(currentValue || 0))));
    setMembersOfGroup(_.clone(membersOfGroup));
  }

  const renderItem = ({ item: payer, index}) => {
    return (
      <View style={styles.rowStyles}>
        <Avatar name={payer.fullname} size={40} />
        <Text style={styles.memberStyles}>{payer.fullname}</Text>
        <View style={styles.inputAmountContainer}>
          <SBTextInput
            style={styles.inputAmount}
            value={`${percents[index]}`}
            onChangeText={(value) => onPayerPercentChange(value, payer, index)}
            placeholder={'0.0'}
          />
          <Text style={styles.unit}>%</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return `${index}`;
  }
  console.log('membersOfGroup', membersOfGroup);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pagerSummaryContainer}>
        <Text style={styles.summaryTilte}>{_.round(totalPercent, 1)}% trên 100%</Text>
        <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>còn { _.round(100 - totalPercent, 1)}%</Text>
      </View>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={membersOfGroup}
      />
    </SafeAreaView>
  );
};

export default React.memo(SplitByPercent);