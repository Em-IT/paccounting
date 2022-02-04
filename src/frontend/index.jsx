import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';
// import '~react-toastify/dist/ReactToastify.css';
import { store } from './store/index';
import Dashboard from './pages/Dashboard';
import CostsList from './pages/Costs/CostsList';
import AddCost from './pages/AddCost/AddCost';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <ToastContainer rtl={false} autoClose={3000} />

    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/"><Dashboard /></Route>
          <Route path="/costs"><CostsList /></Route>
          <Route path="/add-cost"><AddCost /></Route>
        </Switch>
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('app'),
);
