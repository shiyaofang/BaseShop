'use strict';

import React,{Component} from 'react';
import{
	StyleSheet,
	View,
	Text
} from 'react-native';



type Props ={};

export default class IndexPage extends Component<Props>{

	render(){

		return(

			<View style={styles.container}>
				<Text style={{margin:10,fontSize:20,color:'black'}}>
					首页界面嘿嘿嘿
				</Text>
			</View>
		);

	}
}


const styles=StyleSheet.create({

	container:{

		flex:1,
		justifyContent:'center',
		alignItems:'center',
        backgroundColor: '#F5FCFF',
	}


});



