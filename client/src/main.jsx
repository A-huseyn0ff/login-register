import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import UserProvider from './Context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

     <UserProvider>
    <App />

     </UserProvider>

  </React.StrictMode>,
)
