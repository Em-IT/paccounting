import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import axios from 'axios';

import GlobalStyles from './GlobalStyles';
import { store } from './store/index';
import apiUrl from './apiUrl';
import Dashboard from './pages/Dashboard';
import Costs from './pages/Costs';
import Header from './components/Header';

const readHelloWorld = async () => {
  const result = await axios.get(apiUrl + `/helloworld/`);
  console.log(result.data);
};

readHelloWorld();

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/"><Dashboard /></Route>
          <Route path="/costs"><Costs /></Route>
        </Switch>
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('app'),
);
