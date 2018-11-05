
import React from 'react'
import { shallow } from 'enzyme'
import { ResultsComponent } from './'

test('Results Renders a default ', () => {
  const sc = shallow(<Results searchResults={[]} />)
  expect(sc.exists()).toBeFalsy()
})
