import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import { styles } from './SplitBy.style';
import { SBTextInput } from "../../../../components/SBComponent";
import Avatar from '../../../../components/Avatar';
import _ from 'lodash';
import Utils from "../../../../utils/utils";

const SplitByAdjustment = ({ amount, members }) => {
  const [adjustments, setAdjustments] = useState([]);
  const [membersOfGroup, setMembersOfGroup] = useState(members);

  useEffect(() => {
    let minMustPay = Math.min.apply(Math, membersOfGroup.map(member => parseFloat(member.mustPay)));
    membersOfGroup.map(member => adjustments.push(parseFloat(member.mustPay) - minMustPay));
    setAdjustments(_.clone(adjustments));
  }, [])


  const onAdjustmentChange = (value, index) => {
    adjustments[index] = value;
    let total = adjustments.reduce((accumulator, currentValue) => (parseFloat(accumulator || 0) + parseFloat(currentValue || 0)));
    membersOfGroup.map((member, index) => member['mustPay'] = (amount - total)/membersOfGroup.length + parseFloat(adjustments[index]))
    setAdjustments(adjustments);
    setMembersOfGroup(_.clone(membersOfGroup));
  }
  
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.rowStyles}>
        <Avatar name={item.fullname} size={40} />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.memberStyles}>{item.fullname}</Text>
          <Text style={styles.memberMustPayStyles}>{Utils.formatMoney(item.mustPay, 0, 'đ')}</Text>
        </View>
        <View style={styles.inputAmountContainer}>
          <Text style={styles.unit}>+</Text>
          <SBTextInput
            style={styles.inputAmount}
            value={`${adjustments[index]}`}
            onChangeText={(value) => onAdjustmentChange(value, index)}
            placeholder={'0.000'}
          />
        </View>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return `${index}`;
  }


  console.log('adjustments', adjustments);
  
  return (
    <SafeAreaView style={styles.container}>
       <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={membersOfGroup}
      />
    </SafeAreaView>
  );
};

export default React.memo(SplitByAdjustment);