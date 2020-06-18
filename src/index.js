import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/order
import App from './App'
import './styles/base.css'
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { createStore } from 'redux'
// eslint-disable-next-line no-unused-vars
import rootReducer from './store/reducer'

// eslint-disable-next-line no-unused-vars
const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
