import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';


const App = ()=>{
    return(
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);