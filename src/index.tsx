import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  //<React.StrictMode> в этом режиме в dev сборке некоторые хуки вызываются дважды, об этом позаботились разработчики реакта
  <App />
  //</React.StrictMode>
)
