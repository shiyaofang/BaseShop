'use strict';

import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground,
	StatusBar,
	Platform,
	ScrollView
} from 'react-native';

import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//import Text from '../component/Text';

type Props={};

export default class MinePage extends Component<Props>{

	constructor(props){
		super(props);
		this.state={};
	}

	render(){

		return(
			<View style={styles.container}>
				<ImageBackground
					source={Platform.OS === 'ios'? require('../image/my_ios.png') : require('../image/my_android.png')}
					style={styles.imgTabBar}>

					<View style={{flexDirection:'row-reverse'}}>
						<TouchableOpacity style={{paddingRight:px2dp(20),paddingTop:px2dp(16)}}>
							<Ionicons 
								name={'ios_setting_outline'}
								size={28}
								color={"#666"} />
						</TouchableOpacity>
					</View>

					<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: px2dp(24)}}>
                        <Image source={require('../image/default_portrait.png')}
                               style={{height: px2dp(120), width: px2dp(120), borderRadius: px2dp(60)}}/>
                        <View style={{marginLeft: px2dp(32)}}>
                            <Text style={{fontSize: px2dp(34), color: '#333333'}}>张小盒</Text>
                            <View style={styles.roundButton}>
                                <Text style={{fontSize: px2dp(18), color: '#fff'}}>每日签到</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.countView}>
                        <View style={styles.countItem}>
                            <Text style={{fontSize: px2dp(30), color: '#333333'}}>我的收藏</Text>
                            <Text style={{fontSize: px2dp(30), color: '#333333', marginTop: px2dp(8)}}>20</Text>
                        </View>
                        <View style={styles.countItem}>
                            <Text style={{fontSize: px2dp(30), color: '#333333'}}>关注店铺</Text>
                            <Text style={{fontSize: px2dp(30), color: '#333333', marginTop: px2dp(8)}}>210</Text>
                        </View>
                        <View style={styles.countItem}>
                            <Text style={{fontSize: px2dp(30), color: '#333333'}}>浏览足迹</Text>
                            <Text style={{fontSize: px2dp(30), color: '#333333', marginTop: px2dp(8)}}>210</Text>
                        </View>
                    </View>
				</ImageBackground>


				 <ScrollView>
                    <View style={[styles.rowItem, {height: px2dp(100), marginTop: px2dp(32)}]}>
                        <Text style={{fontSize: px2dp(30), color: '#333333', flex: 1}}>购买的订单</Text>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text
                                style={{fontSize: px2dp(24), color: '#999999', marginRight: px2dp(24)}}>购买的订单</Text>
                            <SimpleLineIcons
                                name={'arrow-right'}
                                size={16}
                                color={'#999'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.rowItem, {height: px2dp(140)}]}>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../image/to_pay.png')}/>
                            <Text style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>待付款</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../image/to_ship.png')}/>
                            <Text style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>待发货</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../image/to_receive.png')}/>
                            <Text style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>待收货</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../image/to_finish.png')}/>
                            <Text style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>未评价</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../image/to_issue.png')}/>
                            <Text style={{fontSize: px2dp(24), color: '#333333', marginTop: px2dp(12)}}>退换货</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Text style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>我的地址</Text>
                        <SimpleLineIcons
                            name={'arrow-right'}
                            size={20}
                            color={'#999'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Text style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>账户与安全</Text>
                        <SimpleLineIcons
                            name={'arrow-right'}
                            size={20}
                            color={'#999'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Text style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>客服与帮助</Text>
                        <SimpleLineIcons
                            name={'arrow-right'}
                            size={20}
                            color={'#999'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem, styles.topBorder, {height: px2dp(120)}]}>
                        <Text style={{fontSize: px2dp(32), color: '#333333', flex: 1}}>意见反馈</Text>
                        <SimpleLineIcons
                            name={'arrow-right'}
                            size={20}
                            color={'#999'}/>
                    </TouchableOpacity>
                </ScrollView>

			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imgTabBar: {
        height: px2dp(410) + (Platform.OS === 'android' ? 0 : theme.barContentPad),
        paddingTop: theme.barContentPad,
    },
    countView: {
        marginHorizontal: px2dp(24),
        height: px2dp(140),
        backgroundColor: '#fff',
        borderRadius: px2dp(12),
        flexDirection: 'row',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: '#999999',
        elevation: 4
    },
    countItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    roundButton: {
        height: px2dp(36),
        width: px2dp(120),
        borderRadius: px2dp(18),
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: px2dp(16)
    },
    rowItem: {
        marginHorizontal: px2dp(24),
        flexDirection: 'row',
        alignItems: 'center'
    },
    topBorder: {
        borderTopWidth: px2dp(1),
        borderTopColor: '#f5f5f5'
    }
});











