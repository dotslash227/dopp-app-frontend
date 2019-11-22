/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import HomeScreen from './screens/Home';
import AppContainer from './routes/MainTabs';
import {authReducer} from './reducers/authReducer';

console.disableYellowBox = true;

const rootReducer =  combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer);

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}