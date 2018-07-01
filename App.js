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
  createStackNavigator
} from 'react-navigation';

//页面切换的动画
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import SplashPage from './source/page/SplashPage';
import IndexPage from './source/page/IndexPage';

const App =createStackNavigator({
  SplashPage:{
    screen:SplashPage,
    navigationOptions:{
      gesturesEnabled:true,
      headerTitle:null //去掉react-navigation提供的标题
    }
  },

  IndexPage:{
    screen:IndexPage,
    navigationOptions:{
      gesturesEnabled:true,
      headerTitle:null
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
