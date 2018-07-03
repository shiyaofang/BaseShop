'use strict';

import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

type Props={};

export default class CartPage extends Component<Props>{

	render(){

		return(
			<View style={styles.container}>
				<View style={{margin:10,width:40,height:50,backgroundColor:'red'}}/>
                <View style={{margin:10,width:60,height:50,backgroundColor:'green'}}/>
                <View style={{margin:10,width:80,height:50,backgroundColor:'blue'}}/>
                <View style={{margin:10,width:100,height:50,backgroundColor:'black'}}/>
                <View style={{margin:10,width:100,height:50,backgroundColor:'orange'}}/>
                <View style={{margin:10,width:40,height:50,backgroundColor:'pink'}}/>
			</View>
		);
	}
}

const styles=StyleSheet.create({

	container:{

		flex:1,
		backgroundColor:'#F5FCFF',
		justifyContent:'space-around',
		alignItems:'center',
		flexDirection:'row',
		flexWrap:'wrap'
	},

	txtStyle:{

		margin:10,
		fontSize:20,
		color:'black',
	}


});














