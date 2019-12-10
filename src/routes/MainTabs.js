import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {Icon} from 'native-base';
import SpectaclesScreen from '../screens/Spectacles';
import {CLProductStackNavigator} from './ProductRoutes';
import {checkoutStackNavigator} from './CheckoutRouter';
import {authNavigator} from './AuthRouter';

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
        screen: checkoutStackNavigator,
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

checkoutStackNavigator.navigationOptions = ({navigation}) =>{
    let tabBarVisible = true;
    if(navigation.state.index > 0){
        tabBarVisible = false;
    }
    return{
        tabBarVisible
    };
}

const switchNavigator = createSwitchNavigator({    
    MainTabs: TabNavigator,            
    Auth: authNavigator,
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