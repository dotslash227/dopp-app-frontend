/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import HomeScreen from './screens/Home';
import AppContainer from './routes/MainTabs';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}