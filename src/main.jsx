import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { ShopContextProvider } from './Context/ShopContext.jsx'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ShopContextProvider>
      <App/>
    </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
