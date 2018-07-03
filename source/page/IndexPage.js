'use strict';

import React,{Component} from 'react';
import{
	StyleSheet,
	View,
	Text,
	StatusBar
} from 'react-native';

import FixText from '../component/FixText';


type Props ={};

export default class IndexPage extends Component<Props>{

	render(){

		return(

			<View style={styles.container}>
				<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
				
				 <View style={{borderWidth:2}}>
                    <View style={styles.boxStyle}>                      
                        <View style={{flex:1,backgroundColor:'red'}}/>
                    </View>
                </View>


                <FixText>
                	首页
                </FixText>

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
	},
	boxStyle: {
        width: 200,
        height: 200,
        padding: 30, //内边距
        margin: 50, //外边距
        borderWidth: 20, //边框宽度
        borderColor: 'green', //边框颜色
    }


});



