'use strict';


import React,{Component} from 'react';
import{

	StyleSheet,
	View,
	TouchableOpacity
} from 'react-native';


import {MaterialTopTabBar} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';


class CustomTabBar extends React.Component{


	goSearch(){

		this.props.navigation.navigate('SearchPage',{name:'dayao',age:30});

	}


	render(){
		return(
			<View style={styles.container}>
				<MaterialTopTabBar {...this.props}/>
				<TouchableOpacity style={styles.touchStyle} onPress={()=>this.goSearch()} >
					<Ionicons name={'ios-search-outline'}
                              size={22}
                              color={'#666666'} />
				</TouchableOpacity>
			</View>
		);
	}
}


const styles=StyleSheet.create({

	container:{
		position:'relative',
		backgroundColor:'#fff'
	},

	touchStyle:{
		position:'absolute',
		right: 12, 
		bottom: 10
	}
});


export default withNavigation(CustomTabBar); //导出时用 withNavigation 包装