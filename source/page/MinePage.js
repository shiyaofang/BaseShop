'use strict';

import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

type Props={};

export default class MinePage extends Component<Props>{

	render(){

		return(
			<View style={styles.container}>
				<Text style={styles.txtStyle}>
					我的界面
				</Text>
			</View>
		);
	}
}

const styles=StyleSheet.create({

	container:{

		flex:1,
		justifyContent:'center',
		backgroundColor:'#F5FCFF',
		alignItems:'center',
	},

	txtStyle:{

		margin:10,
		fontSize:20,
		color:'black',
	}


});














