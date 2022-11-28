import ReactDOM from 'react-dom/client'
import App from './App'
import './indexStyle.css'
import { store } from './ReduxToolkit/store'
import { Provider } from 'react-redux'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
