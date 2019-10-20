import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer, { initialState } from './redux/reducer';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import LoginScreen from './pages/Login';
import HomeScreen from './pages/Home';
import QuestionScreen from './pages/Question';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a71136'
    }
  },
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

global.axios = axios.create({
  baseURL: 'https://api.askru.tech/api/'
});

function Auth(props) {

  if(!props.userId) return <LoginScreen/>;

  return (
    <div className="Content">
      <Router>
        <Navbar/>

        <Grid container="container" direction="row" justify="center" alignItems="center">
          <Grid item="item" xs={12} md={8}>
            <Switch>
              <Route path="/question/:id" component={QuestionScreen} />
              <Route path="/" component={HomeScreen} />
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    userId: state.userId,
  });
};

let Authentication = connect(mapStateToProps)(Auth);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Authentication/>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
