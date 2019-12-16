import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import HomeScreen from './screens/Home';
import AppContainer from './routes/MainTabs';
import {authReducer} from './reducers/authReducer';
import {cartReducer} from './reducers/cartReducer';
import {addressReducer} from './reducers/addressReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {PersistGate} from 'redux-persist/integration/react';

console.disableYellowBox = true;

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}

const rootReducer =  combineReducers({
  auth: authReducer,
  cart: cartReducer,
  address: addressReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>        
      </Provider>
    )
  }
}