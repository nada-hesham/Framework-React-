import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import StartFrameWork from './components/Start FrameWork/StartFrameWork.jsx'
import ErrorPage from './components/Error Page/ErrorPage.jsx'
import About from './components/About/About.jsx'
import Portfolio from './components/Portflio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'


function App() {
 let router= createBrowserRouter([
  {path:"" , element: <Layout /> , children:[
    {index: true , element:<StartFrameWork />},
    { path: "/StartFrameWork", element: <StartFrameWork /> },
    { path: '*', element: <ErrorPage/>},
    {path:"about" , element: <About/>},
    {path:'portfolio' , element: <Portfolio/>},
    {path: "contact", element: <Contact/>}

  ]}
 ])

  return <>
  <RouterProvider router={router}/>
  
  </>
}

export default App
