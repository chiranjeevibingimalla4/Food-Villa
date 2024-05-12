import ReactDOM from 'react-dom/client';
import Body from './components/Body.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import About from './components/About.js'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Errors from "./components/Errors.js";
import Contact from './components/Contact.js';
import Cart from './components/Cart.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import Profile from './components/ProfileClass.js';
import useOnline from './utils/useOnline.js';

import imgNoIntenet from './assests/img/noInternet.gif';
import { useState,useEffect } from 'react';
const App = ()=>{
    const isOnline = useOnline();
    const [imageLoaded,setImageLoaded] = useState(false);

    useEffect(()=>{
        const noInternetImg = new Image();
        noInternetImg.src = imgNoIntenet;
        noInternetImg.onload = ()=>{setImageLoaded(true)}
    },[])
    
  if(!isOnline){
    return (
         <>
            
            {(imageLoaded)?(<img style={{width: "100vw",height: "100vh",objectFit:"contain"}} src={imgNoIntenet} alt='no-internet-img' />):(<h1>Opps no internet connection</h1>)}
         </>
    )
  }
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<Errors />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />,
                children:[
                    {
                        path:"profile",
                        element:<Profile />
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/cart",
                element:<Cart />
            },
            { 
                path:"/res/:id",
                element:<RestaurantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
