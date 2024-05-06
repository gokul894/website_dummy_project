import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Herosection from './components/Home/Herosection.jsx'
import Explore from './components/Explore/Explore.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Home />
//       },{
//         path:'about',
//         element:<About/>
//       },{
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Herosection/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
