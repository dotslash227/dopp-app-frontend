import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/Auth/Login';

const authNavigator = createStackNavigator({
    Login:LoginScreen
}, {
    initialRouteName: "Login"
})

export {authNavigator};