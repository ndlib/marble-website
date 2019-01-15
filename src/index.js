import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App'

export const RenderToDOM = () => {
  return ReactDOM.render(<App />, document.getElementById('root') || document.createElement('div', { 'id': 'root' }))
}

RenderToDOM()
