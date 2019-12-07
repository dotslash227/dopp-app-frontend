import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import CheckoutScreen from '../screens/Checkout/Checkout';
import CartPage from '../screens/Cart';

const checkoutStackNavigator = createStackNavigator({
    Cart: CartPage,
    Checkout: CheckoutScreen
}, {
    initialRouteName:"Cart",
    defaultNavigationOptions:{
        header: null
    }
})

export {checkoutStackNavigator};