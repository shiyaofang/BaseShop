/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Counter from './source/component/Counter';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

//页面切换的动画
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from './source/config/theme';



import SplashPage from './source/page/SplashPage';
import IndexPage from './source/page/IndexPage';
import CategoryPage from './source/page/CategoryPage';




const MyTab = createBottomTabNavigator({
        IndexPage: {
            screen: IndexPage,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name={`ios-home${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
                )
            }
        },
        CategoryPage: {
            screen: CategoryPage,
            navigationOptions: {
                tabBarLabel: '分类',
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name={`ios-apps${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
                )
            }
        },
        
       
    }, {
        tabBarOptions: {
            // label和icon的前景色 活跃状态下（选中）
            activeTintColor: theme.primaryColor,
            // label和icon的背景色 不活跃状态下
            inactiveBackgroundColor: theme.lightGray,
            // label和icon的前景色 不活跃状态下(未选中)
            inactiveTintColor: theme.lightBlack,
        }
    }
);


const App =createStackNavigator({
  SplashPage:{
    screen:SplashPage,
    navigationOptions:{
      gesturesEnabled:true,
      header:null //去掉react-navigation提供的标题
    }
  },

  MyTab:{
    screen:MyTab,
    navigationOptions:{
      gesturesEnabled:true,
      header:null
    }
  }
},{

  mode:'card',//页面切换模式，左右是card,上下是modal
  headerMode:'none',//导航栏的显示方式，screen有渐变透明效果，float无透明效果，none隐藏导航栏 
  transitionConfig:()=>({
         screenInterpolator: CardStackStyleInterpolator.forHorizontal //水平动画
  })
}
);



export default App;
