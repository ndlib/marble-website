
import React from 'react';
import {shallow} from 'enzyme';
import {ResultsComponent} from './';

test('ResultsComponent Renders a default ', () => {
  const sc = shallow(<ResultsComponent searchResults={[]} /> )
  expect(sc.exists()).toBeFalsy()
})
