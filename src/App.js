import ReactDOM from 'react-dom/client';
import Body from './components/Body.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import About from './components/About.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Errors.js';

const App = ()=>{
    console.error("hello");
    return(
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<Error />
    },
    {
        path:"/about",
        element:<About />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)