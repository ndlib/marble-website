
import React from 'react'
import { shallow } from 'enzyme'
import { Results } from './'
import ErrorBoundary from '../../../Components/Shared/ErrorBoundary'

test('Results Renders a default ', () => {
  const sc = shallow(<Results searchResults={[]} />)
  expect(sc.exists()).toBeFalsy()
})

test('Results contains ErrorBoundary', () => {
  const sc = shallow(<Results searchResults={['Hello','There']}/>)
  expect(sc.find(ErrorBoundary).exists()).toBeTruthy()
})
