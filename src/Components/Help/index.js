import React from 'react'

import HelpText from './HelpText'
import Sidebar from 'Components/Shared/Sidebar'
import { topics } from 'Configurations/Help'

const Help = () => {
  return (
    <div className='helpTopics'>
      <Sidebar
        title='Help'
        items={topics}
      />
      <HelpText />
    </div>
  )
}

export default Help
