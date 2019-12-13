import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/color';
import { FONT_FAMILY, BORDER_WIDTH } from '../../../../utils/const';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    },
    avatarStyles: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    memberStyles: {
        marginLeft: 15,
        color: colors.white,
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        fontWeight: "500"
    },
    rowStyles: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 15,
        paddingVertical: 10,
    },
    pagerSummaryContainer: {
        height: 50,
        paddingVertical: 10,
        backgroundColor: colors.block,
        alignItems: 'center',
        justifyContent: 'center'
    },
    summaryLeftContainer: {
        flex: 0.75,
        alignItems: 'center',
        justifyContent: 'center'
    },
    summaryRightContainer: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: BORDER_WIDTH,
        borderLeftColor: colors.subTitle,
        flexDirection: 'row'
    },
    summaryTilte: {
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        color: colors.white,
        fontWeight: 'bold'
    },
    inputAmountContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    inputAmount: {
        width: 60,
        borderBottomColor: colors.subTitle,
        paddingBottom: 0,
        textAlign: 'right'
    },
    unit: {
        color: colors.white,
        paddingBottom: 7
    },
    checkBoxStyles: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'flex-end'
    },
    row: {
        flexDirection: 'row',
    },
})