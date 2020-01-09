import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
} from "react-native";
import { styles } from './SplitBy.style';
import SBCheckbox from "../../../../components/SBComponents/SBCheckbox";
import Avatar from '../../../../components/Avatar';
import Utils from "../../../../utils/utils";
import _ from 'lodash';

const SplitByEqually = ({ amount, members }) => {
  const [totalPayers, setTotalPayers] = useState(0);

  useEffect(() => {
    setTotalPayers(members.filter(member => member.mustPay && member.mustPay > 0).length)
  }, [])

  const onCheckAllChange = (isChecked) => {
    if (isChecked) {
      setTotalPayers(members.length);
      const amountPerPayer = getAmountPerPayer(amount, members.length);
      members.map(member => member['mustPay'] = amountPerPayer)
    } else {
      setTotalPayers(0);
      members.map(member => member['mustPay'] = 0)
    }
    console.log('members', members);
  }

  const onCheckedChange = (isChecked, payer) => {
    if (isChecked) {
      setTotalPayers(totalPayers + 1);
      payer['mustPay'] = getAmountPerPayer(amount, totalPayers + 1)
    } else {
      setTotalPayers(totalPayers - 1);
      payer['mustPay'] = 0;
    }
  }

  const renderItem = ({ item: payer }) => {
    return (
      <View style={styles.rowStyles}>
        <Avatar name={payer.fullname} size={40} />
        <Text style={styles.memberStyles}>{payer.fullname}</Text>
        <View style={styles.checkBoxStyles}>
          <SBCheckbox
            onCheckedChange={(isChecked) => onCheckedChange(isChecked, payer)}
            checked={payer.mustPay > 0} />
        </View>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return `${index}`;
  }

  const getAmountPerPayer = (amount, totalPayers) => {
    if (totalPayers > 0) {
      return Math.round(amount / totalPayers);
    }
    return 0;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.pagerSummaryContainer, styles.row]}>
        <View style={styles.summaryLeftContainer}>
          <Text style={styles.summaryTilte}>{Utils.formatMoney(getAmountPerPayer(amount, totalPayers), 0, 'đ')}/người</Text>
          <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>({totalPayers} người)</Text>
        </View>
        <View style={styles.summaryRightContainer}>
          <Text style={[styles.summaryTilte, { marginRight: 5 }]}>Tất cả</Text>
          <SBCheckbox
            checked={totalPayers === members.length ? true : false}
            onCheckedChange={onCheckAllChange}
          />
        </View>
      </View>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={members} />
    </SafeAreaView>
  );
};

export default React.memo(SplitByEqually);