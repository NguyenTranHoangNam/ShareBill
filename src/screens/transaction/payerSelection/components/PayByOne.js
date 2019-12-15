import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../../splitDetail/components/SplitBy.style';
import Avatar from '../../../../components/Avatar';
import SBCheckbox from '../../../../components/SBComponents/SBCheckbox';

export default PayByOne = ({data}) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.rowStyles}>
                <Avatar
                    source={require("../../../../assets/images/logo.png")}
                    size={40}
                />
                <Text style={styles.memberStyles}>Tên thành viên {item}</Text>
                <View style={styles.checkBoxStyles}>
                    <SBCheckbox checkedIcon={'radio-button-checked'} />
                </View>
            </View>
        );
    };

    const keyExtractor = (index) => {
        return `${index}`;
    }

    return (
        <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={data} />
    )
}