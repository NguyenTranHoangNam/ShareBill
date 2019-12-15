import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { FONT_FAMILY } from '../utils/const';
import { colors } from '../utils/color';

export default Avatar = (props) => {
    const { name, size = 60 } = props;
    const stringToColour = (str) => {
        str = str + Math.random().toString(36);
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    }

    return (
        <View style={{width: size, height: size}}>
            {!props.source ? 
            <View style={[styles.container, {width: size, height: size, borderRadius: size / 2,backgroundColor: stringToColour(name) }, {...props.style}]}>
                <Text style={[styles.avatarText, {fontSize: size/1.5}]}>{name[0].toUpperCase()}</Text>
            </View>
            :
            <Image
                {...props} 
                style={[{width: size, height: size, borderRadius: size / 2, overflow: 'hidden' }, {...props.style}]} />
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0, right: 0, top: 0, bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        fontFamily: FONT_FAMILY,
        fontWeight: 'bold',
        color: colors.white,
    }
})