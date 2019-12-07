import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import ContactLenses from '../screens/ContactLenses';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {Icon} from 'native-base';
import {CLProductStackNavigator} from './ProductRoutes';
import CartPage from '../screens/Cart';
import SpectaclesScreen from '../screens/Spectacles';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions:{
            tabBarLabel: "Home",
            tabBarIcon: () =>{
                return <Icon name="home" style={styles.icon} />
            }
        }
    },
    Lenses: {
        screen: CLProductStackNavigator,
        navigationOptions:{
            tabBarIcon: ()=>{
                return <Icon type="MaterialIcons" name="toll" style={styles.icon} />
            }
        },
    },    
    Spectacles: {
        screen: SpectaclesScreen,
        navigationOptions:{
            tabBarIcon: () =>{
                return <Icon type="MaterialIcons" name="voicemail" style={styles.icon} />
            }
        }
    },
    Cart: {
        screen: CartPage,
        navigationOptions:{
            tabBarIcon: () =>{
                return <Icon name="cart" style={styles.icon} />
            }
        }
    },
    Support: {
        screen:  HomeScreen,
        navigationOptions:{
            tabBarIcon: () =>{
                return <Icon name="chatbubbles" style={styles.icon} />
            }
        }
    }
})

const switchNavigator = createSwitchNavigator({
    MainTabs: TabNavigator,
    // ContactLenses: CLProductStackNavigator
},{
    initialRouteName: "MainTabs"
})

const styles = StyleSheet.create({
    icon:{
        color: "#006984",
        fontSize: 25        
    }
})

export default AppContainer = createAppContainer(switchNavigator);