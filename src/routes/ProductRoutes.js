import React from 'react';
import ContactLenses from '../screens/ContactLenses';
import CLProduct from '../screens/CLProduct';
import {createStackNavigator} from 'react-navigation-stack';

const CLProductStackNavigator = createStackNavigator({
    Main: ContactLenses,
    CLProductPage: CLProduct
},{
    initialRouteName: "Main",
    defaultNavigationOptions:{
        header: null
    }
})

export {CLProductStackNavigator}