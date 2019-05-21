import React from 'react';
import { shallow } from 'enzyme';
import Login from './';

const wrapper = shallow(<Login/>);

describe('Login', () => {
  it('match snapshot component', () => {
    expect(wrapper).toMatchSnapshot();
  })
})