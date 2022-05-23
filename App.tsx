import React from 'react';
import {store} from './src/createStore';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigators/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
