import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

const setup = () => shallow(<Header />);

test('Header exists', () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});