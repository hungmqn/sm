import React from 'react';
import { shallow, mount } from 'enzyme';
import Dashboard from './';

// const wrapper = shallow(<Dashboard/>);
const wrapper = mount(<Dashboard/>);

describe('Dashboard', () => {
  it('match snapshot component', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('correct increments counter', () => {
    wrapper.find('#counter').simulate('click');
    
    // wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state().count).toEqual(1);
  })
})
