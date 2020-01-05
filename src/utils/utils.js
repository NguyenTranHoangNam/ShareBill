import {Platform,Dimensions} from 'react-native';

export default class Utils {

	static getCurrentUser = () => {
		return {id: 0};
	}

	static getPayTypeText = ({payType = 0, payers = [{id: 1}]}) => {
		let text = '';
		if (payers.length > 1){
			text = 'NHIỀU NGƯỜI TRẢ';
		} else {
			if (payers[0].id === this.getCurrentUser().id){
				text = 'BẠN TRẢ';
			} else {
				text = payers[0].fullname.toUpperCase() + ' TRẢ'
			}
		}

		text = text + ' VÀ ';

		if (payType === 0){
			text = text + 'CHIA ĐỀU'
		} else {
			text = text + 'CHIA KHÔNG ĐỀU'
		}
		return text;
	}

    static isAndroid = () => (
		Platform.OS === 'android'
    );
    
    static isiPhoneX = () => {
		let dimension = Dimensions.get('window');
		return (
			Platform.OS === 'ios' &&
			!Platform.isPad &&
			!Platform.isTVOS &&
			((dimension.height === 812 || dimension.width === 812) || (dimension.height === 896 || dimension.width === 896))
		)
	};

	//number: số tiền. VD: 5000000
	//places: số chữ số 0 ở phần thập phân. VD: 2 => 5000000,00
	//symbol: đơn vị tiền tệ. VD: đ => 5000000.00đ
	//thousand: ký tự cách phần nghìn (default: '.'). VD: . => 5.000.000,00đ
	//decimal: ký tự cách phần thập phân (default: ','). VD: . => 5.000.000,00đ
	static formatMoney = (number, places, symbol, thousand, decimal) => {
		places = !isNaN(places = Math.abs(places)) ? places : 2;
		symbol = symbol !== undefined ? symbol : "$";
		thousand = thousand || ".";
		decimal = decimal || ",";
		let negative = number < 0 ? "-" : "",
			i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
			j = (j = i.length) > 3 ? j % 3 : 0;
		return negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "") + symbol;
	};
}