import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';
import { findByTestAttr } from '../../helpers/testTools';

const setup = () => shallow(<Header />);

describe('Header Component Tests', () => {

  test('Header exists', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
  
  test('Header has a title', () => {
    const wrapper = setup();
    const titleNode = findByTestAttr(wrapper, "header-title");
    expect(titleNode.exists()).toBe(true);
  });

});