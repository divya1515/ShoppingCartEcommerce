import React from 'react'
import ReactDOM from 'react-dom/client'
import Store from './Components/Store/Store'
import About from './Components/About/About'
import Cart from './Components/Cart/Cart'
import ProductContextProvider from './Context/ProductContextProvider.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Store/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Cart",
        element:<Cart/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ProductContextProvider>
     <RouterProvider router={router}/>
  </ProductContextProvider>
  </React.StrictMode>
)
