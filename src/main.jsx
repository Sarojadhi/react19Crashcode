import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  
import { ThemeProvider } from './Hook/useContextPluspropDrilling/ThemeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/Store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <ThemeProvider>
       <Provider store={store}>
          <App />
        </Provider>
    </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>
)
