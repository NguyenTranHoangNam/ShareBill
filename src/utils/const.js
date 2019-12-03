import Utils from "./utils";
import { colors } from "./color";
import {Dimensions} from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const BORDER_WIDTH = 0.7;
export const FONT_FAMILY = Utils.isAndroid() ? 'Roboto' : 'System';

export const PAY_TYPE = {LENT: 1, OWE: 2};
export const PAY_TYPE_TEXT = {LENT: 'cho mượn', OWE: 'nợ'};
export const PAY_TYPE_COLOR = {LENT: colors.mainLight, OWE: colors.orange};