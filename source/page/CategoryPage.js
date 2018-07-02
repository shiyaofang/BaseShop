'use strict';


import React,{Component} from 'react';
import{
	StyleSheet,
	View,
	Text,
	StatusBar,
	Platform
} from 'react-native';

type Props={};


export default class CategoryPage extends Component<Props>{

	componentWillUnmount(){
		this._navListener.remove();
	}

	componentDidMount(){

		this._navListener=this.props.navigation.addListener('didFocus',()=>{
			StatusBar.setBarStyle('dark-content');		
			Platform.OS==='android' && StatusBar.setBackgroundColor('#fff');
		});
	}


	render(){
		return(

				<View style={styles.container}>
					<Text style={styles.txtStyle}>类别</Text>
				</View>				
		);
	}
}



const styles=StyleSheet.create({

	container:{
		flex:1,
		backgroundColor:'#F5FCFF',
		justifyContent:'center',
		alignItems:'center',	
	},

	txtStyle:{
		margin:10,
		fontSize:20,
		color:'black',
	}


});