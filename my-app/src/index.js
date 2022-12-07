import {ChildContext} from './Context/context.js'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ChildContext>
      <App />
    </ChildContext>
  </React.StrictMode>,
  document.getElementById('root'),
)