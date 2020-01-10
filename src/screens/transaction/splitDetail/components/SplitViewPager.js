import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../../../utils/color';
import IndicatorViewPager from '../../../../components/ViewPager/IndicatorViewPager';
import PagerCustomIndicator from '../../../../components/ViewPager/indicator/PagerCustomIndicator';
import PagerTitle from './PagerTitle';
import SplitByEqually from './SplitByEqually';
import SplitByExactly from './SplitByExactly';
import SplitByPercent from './SplitByPercent';
import SplitByShares from './SplitByShares';
import SplitByAdjustment from './SplitByAdjustment';
import Utils from '../../../../utils/utils';
import _ from 'lodash';

export default SplitViewPager = ({transaction}) => {
    const [tabIndex, setTabIndex] = useState(transaction.payType);
    const [arrayMembers, setArrayMembers] = useState([]);

    useEffect(()=>{
        let membersOfGroup = Utils.getMembersOfGroup(transaction.groupId);
        // let arrayMembers = [_.clone(membersOfGroup), _.clone(membersOfGroup), _.clone(membersOfGroup), ]
        let arrayMembers = [];
        for (let i = 0; i < 5; i++){
            membersOfGroup.map(member => {
                let foundPayer = transaction.payers.find(payer => payer.email === member.email)
                member['mustPay'] = foundPayer ? foundPayer.mustPay : 0;
            })
            arrayMembers.push(_.clone(membersOfGroup));
        }
        setArrayMembers(arrayMembers);
    },[])

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
                    <SplitByEqually 
                        amount={transaction.amount}
                        members={arrayMembers[0]}
                    />
                </View>
                <View>
                    <SplitByExactly
                        amount={transaction.amount}
                        members={arrayMembers[1]}
                    />
                </View>
                <View>
                    <SplitByPercent
                        amount={transaction.amount}
                        members={arrayMembers[2]}
                    />
                </View>
                <View>
                    <SplitByShares
                        amount={transaction.amount}
                        members={arrayMembers[3]}
                    />
                </View>
                <View>
                    <SplitByAdjustment
                        amount={transaction.amount}
                        members={arrayMembers[4]}
                    />
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