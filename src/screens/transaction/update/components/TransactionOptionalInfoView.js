import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SBTextInput } from '../../../../components/SBComponent';
import { colors } from '../../../../utils/color';
import { SCREEN_WIDTH, FONT_FAMILY, BORDER_WIDTH } from '../../../../utils/const';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default TransactionOptionalInfoView = ({ }) => {
    const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);

    showDateTimePicker = () => {
        setDateTimePickerVisible(true);
    };

    hideDateTimePicker = () => {
        setDateTimePickerVisible(false);
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        setDateTimePickerVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.iconContainer}>
                    <SBIconFont name='today' size={30} color={colors.white} />
                </View>
                <TouchableOpacity activeOpacity={1} style={styles.buttonContainer} onPress={showDateTimePicker}>
                    <Text style={styles.buttonText}>HÔM NAY</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={isDateTimePickerVisible}
                    onConfirm={handleDatePicked}
                    onCancel={hideDateTimePicker}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={[styles.iconContainer, { borderRadius: 20, backgroundColor: 'white' }]} />
                <SBTextInput style={{ width: SCREEN_WIDTH - 90 }} placeholder='TÊN NHÓM' />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={styles.iconContainer}>
                    <SBIconFont name='note-add' size={30} color={colors.white} />
                </View>
                <SBTextInput style={styles.textInput} placeholder='Ghi chú' />
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