import React from 'react';
import {shallow} from 'enzyme';
import HomeRedux from './home';
import td from 'testdouble';

describe('Home component tests', () => {
  // use rewire to extract private class
  const Home = HomeRedux.__get__('Home');

  it('should render correctly', () => {
    const output = shallow(<Home randomNumber={45}/>);
    expect(output).toMatchSnapshot();
  });

  it('should invoke private generateRandom method on button click', () => {
    // create a mock function using testdouble and set it up
    // to return a predictable value when invoked
    const mockGenerateRandom = td.function('mockGenerateRandom');

    // replace the real function with our mock
    Home.prototype.onClickGenerateRandom = mockGenerateRandom;

    // render the component
    const output = shallow(<Home randomNumber={45}/>);
    const button = output.find('button');

    // simulate button click to invoke the mock function
    button.simulate('click');

    // assert the mock function was invoked
    td.verify(mockGenerateRandom());
    expect(output).toMatchSnapshot();
  });
});