import React, { useState, useEffect } from "react";
import _ from 'lodash';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { colors } from "../../../utils/color";
import {
  SBHeader,
  SBButton,
} from "../../../components/SBComponent";
import TransactionRequireInfoView from "./components/TransactionRequireInfoView";
import TransactionOptionalInfoView from "./components/TransactionOptionalInfoView";
import { TransactionImageView } from "./components/TransactionImageView";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { createTransaction } from "../../../redux/transaction/transaction.action";

let  initTrans = {
  id: moment().format('DDMMYYYYHHmmss'),
  groupId: 1,
  description: 'Ăn sáng',
  amount: '10000',
  createTime: moment().format('DD/MM/YYYY HH:mm'),
  updateTime: '',
  image: '',
  payType: 1,
  logo: '',
  comments: [],
  payers: [{id: 1, fullname: 'Lương Kiên Hào'}],
}

export const UpdateTransactionScreen = (props) => {
  const [transaction, setTransaction] = useState(_.clone(props.navigation.getParam('transaction', initTrans)));

  const onBackPress = () => {
    props.navigation.navigate(props.navigation.state.params.fromTab);
  };

  const dispatch = useDispatch();

  const onSubmit = (transaction) => {
    console.log('transaction', transaction);
    dispatch(createTransaction(transaction));
  }

  const onDescriptionChange = (value) => {
    let trans = _.clone(transaction);
    trans.description = value;
    setTransaction(trans);
  }

  const onAmountChange = (value) => {
    let trans = _.clone(transaction);
    trans.amount = value;
    setTransaction(trans);
  }

  const onDateChange = (date) => {
    let trans = _.clone(transaction);
    trans.createTime = moment(date).format('DD/MM/YYYY HH:mm');
    setTransaction(trans);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SBHeader onLeftPress={onBackPress} title={"Thêm chi tiêu"} />
      <ScrollView>
        <TransactionRequireInfoView
          transaction={transaction}
          onDescriptionChange={onDescriptionChange}
          onAmountChange={onAmountChange}
        />

        <TransactionOptionalInfoView 
          transaction={transaction} 
          onDateChange={onDateChange}
        />

        <TransactionImageView transaction={transaction} />
      </ScrollView>
      <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
        <SBButton
          buttonText={"THÊM CHI TIÊU"}
          roundVertical
          onPress={() => onSubmit(transaction)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  }
});
