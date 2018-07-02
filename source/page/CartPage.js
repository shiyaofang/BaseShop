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
				<Text style={styles.txtStyle}>
					购物车
				</Text>
			</View>
		);
	}
}

const styles=StyleSheet.create({

	container:{

		flex:1,
		backgroundColor:'#F5FCFF',
		justifyContent:'center',
		alignItems:'center'
	},

	txtStyle:{

		margin:10,
		fontSize:20,
		color:'black',
	}


});














