import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyles from './GlobalStyles';
//import { store } from './store/index';
import apiUrl from './apiUrl';
import axios from 'axios';

const readHelloWorld = async () => {
  const result = await axios.get(apiUrl + `/helloworld/` )
  console.log(result.data);
}

readHelloWorld();

ReactDOM.render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <GlobalStyles />
      <div>Emad</div>
    {/* </Provider> */}
  </StrictMode>,
  document.getElementById('app')
);
