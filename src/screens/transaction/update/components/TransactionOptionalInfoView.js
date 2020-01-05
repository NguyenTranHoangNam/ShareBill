import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SBTextInput } from '../../../../components/SBComponent';
import { colors } from '../../../../utils/color';
import { SCREEN_WIDTH, FONT_FAMILY, BORDER_WIDTH } from '../../../../utils/const';
import DateTimePicker from 'react-native-modal-datetime-picker';
import _ from 'lodash';
import moment from 'moment';

export default TransactionOptionalInfoView = ({transaction}) => {
    const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
    const [trans, setTrans] = useState(transaction);

    const showDateTimePicker = () => {
        setDateTimePickerVisible(true);
    };

    const hideDateTimePicker = () => {
        setDateTimePickerVisible(false);
    };

    const handleDatePicked = date => {
        let transClone = _.clone(trans);
        transClone.createTime = moment(date).format('DD/MM/YYYY HH:mm');
        setTrans(transClone);
        setDateTimePickerVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.iconContainer}>
                    <SBIconFont name='today' size={30} color={colors.white} />
                </View>
                <TouchableOpacity activeOpacity={1} style={styles.buttonContainer} onPress={showDateTimePicker}>
                    <Text style={styles.buttonText}>{trans.createTime}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode={'datetime'}
                    date={moment(trans.createTime, 'DD/MM/YYYY HH:mm').toDate()}
                    isVisible={isDateTimePickerVisible}
                    onConfirm={handleDatePicked}
                    onCancel={hideDateTimePicker}
                    datePickerModeAndroid={'spinner'}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={[styles.iconContainer, { borderRadius: 20, backgroundColor: 'white' }]} />
                <TouchableOpacity activeOpacity={1} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{transaction.group.name}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.block,
        marginTop: 15,
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    textInput: {
        width: SCREEN_WIDTH - 90,
    },
    buttonContainer: {
        width: SCREEN_WIDTH - 90,
        borderBottomColor: colors.lineForm,
        borderBottomWidth: BORDER_WIDTH,
        color: colors.white,
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: FONT_FAMILY,
        color: colors.white
    }
})