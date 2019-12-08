import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ViewPropTypes, Image, Text, TouchableOpacity } from 'react-native'
import IndicatorViewPager from '../IndicatorViewPager'
import { SBIconFont } from '../../SBComponent'
import { FONT_FAMILY } from '../../../utils/const'

export default class PagerCustomIndicator extends Component {
    static propTypes = {
        ...ViewPropTypes,
        initialPage: PropTypes.number,
        pager: PropTypes.instanceOf(IndicatorViewPager),
        tabs: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            iconSource: Image.propTypes.source,
            selectedIconSource: Image.propTypes.source
        })).isRequired,
        itemStyle: ViewPropTypes.style,
        selectedItemStyle: ViewPropTypes.style,
        iconStyle: Image.propTypes.style,
        selectedIconStyle: Image.propTypes.style,
        textStyle: Text.propTypes.style,
        selectedTextStyle: Text.propTypes.style,
        changePageWithAnimation: PropTypes.bool,
    }

    static defaultProps = {
        tabs: [],
        changePageWithAnimation: true
    }

    state = {
        selectedIndex: this.props.initialPage
    }

    render () {
        let {
            tabs, pager, style, itemStyle, selectedItemStyle, iconStyle,
            selectedIconStyle, textStyle, selectedTextStyle, changePageWithAnimation
        } = this.props
        if (!tabs || tabs.length === 0) return null

        let tabsView = tabs.map((tab, index) => {
            let isSelected = this.state.selectedIndex === index
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.itemContainer, isSelected ? selectedItemStyle : itemStyle]}
                    key={index}
                    onPress={() => {
                        if (!isSelected){
                            if (this.props.changePageWithAnimation)
                                pager.setPage(index);
                            else pager.setPageWithoutAnimation(index);
                        }
                    }}
                >  
                    {tab.useIcon ? 
                    <SBIconFont 
                        name={isSelected ? tab.selectedIconName : tab.iconName}
                        color={isSelected ? tab.selectedIconColor : tab.iconColor}
                        size={isSelected ? tab.selectedIconSize : tab.iconSize} />
                    : 
                    <Text style={[styles.iconTextStyle, {
                        color: (isSelected ? tab.selectedIconColor : tab.iconColor),
                        fontSize: (isSelected ? tab.selectedIconSize : tab.iconSize)
                    }]}>
                        {tab.iconName}
                    </Text>
                    }
                    {!!tab.text && 
                    <Text
                        style={[isSelected ? styles.textSelected : styles.text, isSelected ? selectedTextStyle : textStyle]}
                    >
                        {tab.text}
                    </Text> }
                </TouchableOpacity>
            )
        })
        return (
            <View style={[styles.container, style]} >
                {tabsView}
            </View>
        )
    }

    onPageSelected (e) {
        this.setState({selectedIndex: e.position})
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F7F7F7'
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    image: {},
    iconTextStyle: {
        fontFamily: FONT_FAMILY,
    },
    text: {
        marginTop: 4,
        fontSize: 11,
        color: '#999999'
    },
    textSelected: {
        marginTop: 4,
        fontSize: 11,
        color: '#3584F6'
    }
})