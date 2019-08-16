import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { PersistGate } from 'redux-persist/integration/react';
import HomePage from './containers/HomePage';
import AppBar from './components/AppBar';
import rootReducer from './reducers/rootReducer';
import './assets/App.css';

const composeEnhancers =
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
  compose;

/* Persistor config starts */

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* Create redux store */
const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const persistor = persistStore(store);

/* Persistor config ends */

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <AppBar title='Loan Calculator' />
          <HomePage />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
