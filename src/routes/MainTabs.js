import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import { createAppContainer } from 'react-navigation';
import {Icon} from 'native-base';

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
        screen: HomeScreen,
        navigationOptions:{
            tabBarIcon: ()=>{
                return <Icon type="MaterialIcons" name="toll" style={styles.icon} />
            }
        }
    },
    Spectacles: {
        screen: HomeScreen,
        navigationOptions:{
            tabBarIcon: () =>{
                return <Icon type="FontAwesome" name="glasses" style={styles.icon} />
            }
        }
    },
    Cart: {
        screen: HomeScreen,
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

const styles = StyleSheet.create({
    icon:{
        color: "#006984",
        fontSize: 25        
    }
})

export default AppContainer = createAppContainer(TabNavigator);