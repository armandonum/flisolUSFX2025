import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import{ Movie} from './components/pages/newMovie/NewMovie'
import Template from './components/templates/template'
import Home from './components/pages/home/home.tsx'

import App from './App.tsx'


const routes =createBrowserRouter([
  {
    path: '/',
    element: <Template><App />  <Home/></Template>
  },
  {
    path: '/Home',
    element: <Template><Home /></Template>
  }
]
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)