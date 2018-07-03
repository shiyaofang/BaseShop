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
	Platform
} from 'react-native';

import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FixText from '../component/FixText';

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
                            <FixText style={{fontSize: px2dp(34), color: '#333333'}}>张小盒</FixText>
                            <View style={styles.roundButton}>
                                <FixText style={{fontSize: px2dp(18), color: '#fff'}}>每日签到</FixText>
                            </View>
                        </View>
                    </View>
                    <View style={styles.countView}>
                        <View style={styles.countItem}>
                            <FixText style={{fontSize: px2dp(30), color: '#333333'}}>我的收藏</FixText>
                            <FixText style={{fontSize: px2dp(30), color: '#333333', marginTop: px2dp(8)}}>20</FixText>
                        </View>
                        <View style={styles.countItem}>
                            <FixText style={{fontSize: px2dp(30), color: '#333333'}}>关注店铺</FixText>
                            <FixText style={{fontSize: px2dp(30), color: '#333333', marginTop: px2dp(8)}}>210</FixText>
                        </View>
                        <View style={styles.countItem}>
                            <FixText style={{fontSize: px2dp(30), color: '#333333'}}>浏览足迹</FixText>
                            <FixText style={{fontSize: px2dp(30), color: '#333333', marginTop: px2dp(8)}}>210</FixText>
                        </View>
                    </View>


				</ImageBackground>
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
    }
});











