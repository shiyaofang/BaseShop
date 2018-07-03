'use strict';

import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import px2dp from '../utils/px2dp';


type Props={};

export default class MinePage extends Component<Props>{

	render(){

		return(
			<View style={styles.container}>
				<View style={{width:px2dp(750),height:px2dp(200) ,backgroundColor:'#dadada'}} />
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














