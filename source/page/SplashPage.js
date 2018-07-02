'use strict';


import React,{Component} from 'react';
import{
	StyleSheet,
	View,
	Image
} from 'react-native';

import theme from '../config/theme';


export default class SplashPage extends React.Component{

	componentDidMount(){
		//执行定时任务

		this.timer=setTimeout(()=>{

			//跳转到下一个界面
			this.props.navigation.replace('MyTab');
			//移除定时任务
			this.timer && clearTimeout(this.timer);
		},2000);
	}


	render(){

		return(
			<Image style={{width:theme.screenWidth,height:theme.screenHeight}}
			 	   source={require('../image/launch.png')}
			 	   resizeMode='cover'
			 />
		);

	}




}