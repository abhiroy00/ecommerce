import Navbar from './Common/Navbar'
import './App.css'
import Home from './Common/Home'
import Infopage from './features/infopage/Infopage'
import Contact from './features/Contact us/Contact'
import Product from './features/products/Product'
import Footer from './Common/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AboutUs from './features/About/AboutUs'
import Category from './features/Category/category'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Outlet />
        <Footer/>
      </>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/Product",
          element: <Product/>
        },
        {
          path: "/Contact",
          element: <Contact/>
        },
        {
          path: "/infopage/:id", 
          element: <Infopage />
        },
        {
          path: "/About",
          element: <AboutUs/>
        },
       
        {
          path: "/category",
          element: <Category/>
        },
        

    
      ]
     
      
    }
    

  ])

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
