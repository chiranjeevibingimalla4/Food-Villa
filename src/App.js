import React from 'react';
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
import { lazy, Suspense,useState } from 'react';
import UserContext from './utils/UserContext.js';
import { Provider} from 'react-redux';
import store from './utils/store.js';

// import dummyLogo from './mocks/dummyLogo.js';
const Instamart = lazy(()=>import("./components/Instamart.js"))


const App = ()=>{
    const isOnline = useOnline();
    const [user,setUser] = useState({
            name:"Chiru",
            email:"bingimalla4@gmail.com"
        },
    )
    return (!isOnline)?(
        <>
           <h1>Opps no internet connection</h1>
        </>
    ):(
        <>
            <Provider store={store}>
                <UserContext.Provider value={{user:user,setUser:setUser}}>
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </Provider>
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
