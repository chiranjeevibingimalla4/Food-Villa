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
import Shimmer from './components/Shimmer.js';
import { lazy, Suspense } from 'react';
const Instamart = lazy(()=>import("./components/Instamart.js"))


const App = ()=>{
    const isOnline = useOnline();
  
    return (!isOnline)?(
        <>
           <h1>Opps no internet connection</h1>
        </>
    ):(
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
            },
            {
                path:"/instamart",
                element: (<Suspense fallback={<h1>Loading...</h1>}><Instamart /></Suspense>)
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
