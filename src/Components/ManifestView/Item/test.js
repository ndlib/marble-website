import React from 'react'
import { shallow } from 'enzyme'
import { Item } from './'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import ItemSide from './ItemSide'
import ItemMetaData from './ItemMetaData'
import RelatedItems from './RelatedItems'

const wrapper = shallow(<Item currentManifest={{}} />)

test('renders subcomponents', () => {
  expect(wrapper.find(ContentLeftSidebar)).toBeTruthy()
  expect(wrapper.find(ItemSide)).toBeTruthy()
  expect(wrapper.find(ItemMetaData)).toBeTruthy()
  expect(wrapper.find(RelatedItems)).toBeTruthy()
})
