/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/main/form.js';
import Results from '../components/main/result.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Form />', ()=>{


  it('exist Form in our app', () => {
    let app = shallow(<Form />);
    expect(app.find('button').exists()).toBeTruthy();
  });

  it('correctly render to the DOM', ()=> {
    let app = renderer.create(<Form />);
    expect(app).toMatchSnapshot();
  });

  it('start of our application',()=>{
    let app = shallow(<Form />);
    expect(app.find('button').exists()).toBeTruthy();
    expect(app.find('input').exists()).toBeTruthy();
    expect(app.find('form').exists()).toBeTruthy();

  });
 
  it('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});