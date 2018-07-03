'use strict';

import React,{Component} from 'react';
import{
	View,
	StyleSheet,
	Text,
	StatusBar
} from 'react-native';

import {SafeAreaView} from 'react-navigation';



type Props={};


export default class SearchPage extends Component<Props>{

	render(){

		const {navigation}=this.props;
		const name=navigation.getParam('name');
		const age=navigation.getParam('age');
		const gender=navigation.getParam('gender','不详');

		return(

			<SafeAreaView style={styles.container}>
				<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
				<Text style={styles.txtStyle}>
					搜索界面  name :{name} , age :{age} ,gender :{gender}
				</Text>	
			</SafeAreaView>
		);
	}
}


const styles=StyleSheet.create({


	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#F5FCFF',
	},
	txtStyle:{
		margin:10,
		fontSize:20,
		color:'black',
	}
});