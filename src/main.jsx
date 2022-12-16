import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PizzaProvider from './context/PizzaProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <PizzaProvider>
    <App />
    </PizzaProvider>
  </BrowserRouter>,
)
