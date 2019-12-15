import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../utils/color';

export default SBSwitch = ({ value, onValueChange, style }) => {
    const [isChecked, setChecked] = useState(value);

    onPress = () => {
        onValueChange(!isChecked);
        setChecked(!isChecked)
    }

    return (
        <TouchableOpacity style={[style, styles.container]}
            activeOpacity={1}
            onPress={onPress}
        >
            <View style={{ flex: 1, height: 26, justifyContent: 'center' }}>
                <View style={{
                    position: 'absolute',
                    backgroundColor: isChecked ? colors.main : colors.subTitle,
                    opacity: 0.3, width: 30,
                    height: 16, borderRadius: 8,
                    marginTop: 5, marginLeft: 2
                }} />

                {isChecked 
                    ? <View style={{ position: 'absolute', backgroundColor: colors.main, width: 20, height: 20, borderRadius: 10, marginTop: 3, right: 0 }} />
                    : <View style={{ position: 'absolute', backgroundColor: colors.subTitle, width: 20, height: 20, borderRadius: 10, marginTop: 3 }} />
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 34,
        height: 26,
    }
})