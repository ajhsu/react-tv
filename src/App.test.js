import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  // Smoke test: verifying that a component renders without throwing
  {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  }
  // Shallow rendering
  {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  }
});
