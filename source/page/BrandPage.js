'use strict';


import React,{Component} from 'react';
import{
	StyleSheet,
	View,
	Text
}from 'react-native';


type Props={};

export default class BrandPage extends Component<Props>{
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.txtStyle}>品牌</Text>
			</View>
		);
	}
}


const styles=StyleSheet.create({

	container :{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#F5FCFF'
	},

	txtStyle:{

		margin:10,
		fontSize:20,
		color:'black'
	}

});