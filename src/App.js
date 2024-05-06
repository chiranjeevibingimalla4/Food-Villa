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

const App = ()=>{
    console.log("hello");
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
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
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