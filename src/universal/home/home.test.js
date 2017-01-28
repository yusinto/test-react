import React from 'react';
import {shallow} from 'enzyme';
import HomeRedux from './home';

describe('Home component tests', () => {
  // use rewire to extract private class
  const Home = HomeRedux.__get__('Home');

  it('should render correctly', () => {
    const output = shallow(<Home randomNumber={45}/>);
    expect(output).toMatchSnapshot();
  })
});