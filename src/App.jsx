import Navbar from './Common/Navbar'
import './App.css'
import Home from './Common/Home'
import Infopage from './features/infopage/infopage'
import Contact from './features/Contact us/Contact'
import Footer from './Common/Footer'
import Product from './features/products/Product'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './features/About/About'
import Category from './features/Category/category'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Outlet />
        <Footer />
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
          path: "/infopage",
          element: <Infopage/>
        },
        {
          path: "/About",
          element: <About/>
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
