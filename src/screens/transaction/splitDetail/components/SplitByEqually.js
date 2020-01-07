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

export const SplitByEqually = ({amount, payers, members}) => {
  const [checkingPayers, setCheckingPayers] = useState(payers);

  const onCheckAllChange = (isChecked) => {
    if (isChecked){
      setCheckingPayers(members);
    } else {
      setCheckingPayers([]);
    }
  }

  const onCheckedChange = (isChecked, checkingPayers, checkingPayer) => {
    checkingPayers = _.clone(checkingPayers);
    if (isChecked){
      checkingPayers.push(checkingPayer);
    } else {
      checkingPayers = checkingPayers.filter(payer => payer.email !== checkingPayer.email)
    }
    setCheckingPayers(checkingPayers)
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowStyles}>
        <Avatar name={item.fullname} size={40}/>
        <Text style={styles.memberStyles}>{item.fullname}</Text>
        <View style={styles.checkBoxStyles}>
          <SBCheckbox 
            onCheckedChange={(isChecked) => onCheckedChange(isChecked, checkingPayers, item)}
            checked={checkingPayers.some(payer => payer.email === item.email)} />
        </View>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return `${index}`;
  }

  const getAmountPerPayer = (amount, members) => {
    return Math.round(amount/members.length);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.pagerSummaryContainer, styles.row]}>
        <View style={styles.summaryLeftContainer}>
          <Text style={styles.summaryTilte}>{Utils.formatMoney(getAmountPerPayer(amount, members), 0, 'đ')}/người</Text>
          <Text style={[styles.summaryTilte, { fontWeight: 'normal' }]}>({members.length} người)</Text>
        </View>
        <View style={styles.summaryRightContainer}>
          <Text style={[styles.summaryTilte, { marginRight: 5 }]}>Tất cả</Text>
          <SBCheckbox 
            checked={checkingPayers.length === members.length ? true : false}
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