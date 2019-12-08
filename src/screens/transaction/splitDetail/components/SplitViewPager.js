import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONT_FAMILY, BORDER_WIDTH } from '../../../../utils/const';
import { colors } from '../../../../utils/color';
import IndicatorViewPager from '../../../../components/ViewPager/IndicatorViewPager';
import PagerCustomIndicator from '../../../../components/ViewPager/indicator/PagerCustomIndicator';
import PagerTitle from './PagerTitle';
export default SplitViewPager = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const _renderCustomIndicator = () => {
        let tabs = [{
            useIcon: false,
            iconName: '=',
            selectedIconName: '=',
            iconColor: colors.white_70,
            selectedIconColor: colors.white,
            iconSize: 30,
            selectedIconSize: 30,
        }, {
            useIcon: false,
            iconName: '1.23',
            selectedIconName: '1.23',
            iconColor: colors.white_70,
            selectedIconColor: colors.white,
            iconSize: 20,
            selectedIconSize: 20
        }, {
            useIcon: false,
            iconName: '%',
            selectedIconName: '%',
            iconColor: colors.white_70,
            selectedIconColor: colors.white,
            iconSize: 20,
            selectedIconSize: 20
        }, {
            useIcon: true,
            iconName: 'insert-chart',
            selectedIconName: 'insert-chart',
            iconColor: colors.white_70,
            selectedIconColor: colors.white,
            iconSize: 20,
            selectedIconSize: 20
        }, {
            useIcon: false,
            iconName: '+/-',
            selectedIconName: '+/-',
            iconColor: colors.white_70,
            selectedIconColor: colors.white,
            iconSize: 20,
            selectedIconSize: 20
        }];
        return <PagerCustomIndicator itemStyle={styles.tabStyle} selectedItemStyle={styles.selectedTabStyle} tabs={tabs} />;
    }

    const onPageSelected = ({ position }) => {
        setTabIndex(position);
    } 

    return (
        <View style={styles.container}>
            <PagerTitle tabIndex={tabIndex}/>
            <IndicatorViewPager
                style={styles.viewPagerContainerStyle}
                indicator={_renderCustomIndicator()}
                initialPage={tabIndex}
                onPageSelected={onPageSelected}
            >
                <View>
                    <Text>Page 1</Text>
                </View>
                <View>
                    <Text>Page 2</Text>
                </View>
                <View>
                    <Text>Page 3</Text>
                </View>
                <View>
                    <Text>Page 4</Text>
                </View>
                <View>
                    <Text>Page 5</Text>
                </View>
            </IndicatorViewPager>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewPagerContainerStyle: {
        flex: 1,
        backgroundColor: colors.background,
        flexDirection: 'column-reverse',
        overflow: 'hidden'
    },
    tabStyle: {
        backgroundColor: colors.main,
        borderBottomColor: colors.main,
        borderBottomWidth: 2,
    },
    selectedTabStyle: {
        backgroundColor: colors.main,
        borderBottomColor: colors.white,
        borderBottomWidth: 2,
    }
})