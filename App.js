import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/es/integration/react';

import Navigator from './navigation/Navigator';
import reducer from './store/reducer';

enableScreens();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['settings'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistedStore = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
