import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import { SBIconFont } from '../SBComponent';
import { colors } from '../../utils/color';

export default SBCheckbox = ({onCheckedChange, checked = false, checkedIcon = 'check-circle', uncheckIcon='radio-button-unchecked', color = colors.main, size = 20}) => {
    const [isChecked, setChecked] = useState(checked);

    useEffect(()=>{
        setChecked(checked)
    }, [checked])

    const onPress = () => {
        onCheckedChange ? onCheckedChange(!isChecked) : null;
        setChecked(!isChecked);
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <SBIconFont name={isChecked ? checkedIcon : uncheckIcon} color={color} size={size}/>
        </TouchableOpacity>
    )
}