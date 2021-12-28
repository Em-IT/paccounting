import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Dashboard from './Dashboard';
import { store } from '../store';

const setup = () => {
  return mount(<Provider store={store}><Dashboard /></Provider>);
};

test('Dashboard exists', () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});
