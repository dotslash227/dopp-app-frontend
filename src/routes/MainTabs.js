import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import { createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    "Contact Lenses": HomeScreen,
    News: HomeScreen,
    Support: HomeScreen
})

export default AppContainer = createAppContainer(TabNavigator);