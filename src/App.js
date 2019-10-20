import React from 'react';
import './App.css';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer, { initialState } from './redux/reducer';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
import HomeScreen from './pages/Home';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

global.axios = axios.create({
  baseURL: 'https://api.askru.tech/api/'
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <HomeScreen/>
      </div>
    </Provider>
  );
}

export default App;
