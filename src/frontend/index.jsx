import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import GlobalStyles from './GlobalStyles';
import { store } from './store/index';
import Dashboard from './pages/Dashboard';
import CostsList from './pages/Costs/CostsList';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/"><Dashboard /></Route>
          <Route path="/costs"><CostsList /></Route>
        </Switch>
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('app'),
);
