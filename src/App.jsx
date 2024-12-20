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
import Cart from './features/carts/Cart'
import Page1 from './features/ShopWithUs/Page1'
import Page2 from './features/ShopWithUs/Page2'
import Page3 from './features/ShopWithUs/Page3'
import MyOrders from './features/order/MyOrders'
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
        {
          path: "/cart/:id",
          element: <Cart/>
        },
        {
          path:"/page1",
          element:<Page1></Page1>
        },
        {
          path:"/page2",
          element:<Page2></Page2>
        },
        {
          path:"/page3",
          element:<Page3></Page3>
        },
        {
          path:"/my-orders",
          element:<MyOrders></MyOrders>
        }
       
        

    
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
