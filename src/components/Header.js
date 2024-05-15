import { useState } from "react";
import imgSrc from '../assests/img/food_villa.png';
import {Link} from 'react-router-dom';

const Title = ()=>{
    const [url,setURl] = useState();
    return (
        <div className="flex items-center font-sans text-red-600">
            
            <img  className="w-20 p-2 object-contain hover:scale-105" src={imgSrc} alt="logo" />
            <a href="/" className="text-red-600 text-2xl hover:scale-105">
                    Food Villa
            </a>
       </div>
    )};


const HeaderComponent = ()=>{
    const [title,setTitle]=useState("Food Villa");
    const [isLogged,setIsLogged] = useState(false);

   return(
       <div className='header flex justify-between items-center bg-yellow-100'>
           <Title />
           
           <div className='nav-items flex flex-row'>
               <ul className="flex list-none">
                   <li className="p-3 text-red-600 font-serif text-base hover:cursor-pointer hover:underline"><Link to="/" className="">Home</Link></li>
                   <li className="p-3 text-red-600 font-serif text-base hover:cursor-pointer hover:underline"><Link to="/instamart">Instamart</Link></li>
                   <li className="p-3 text-red-600 font-serif text-base hover:cursor-pointer hover:underline"><Link to="/about">About</Link></li>
                   <li className="p-3 text-red-600 font-serif text-base hover:cursor-pointer hover:underline"><Link to="/contact">Contact</Link></li>
                   <li className="p-3 text-red-600 font-serif text-base hover:cursor-pointer hover:underline"><Link to="/cart">Cart</Link></li>
               </ul>
               {
                    (isLogged)?(<button className="login" onClick={()=>{setIsLogged(false)}}>Logout</button>):
                    (<button className="logout" onClick={()=>{setIsLogged(true)}}>Login</button>)
               }
           </div>
           
       </div>
   )
}

export default HeaderComponent;

{/* <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaG7rEM5GObziWvnOrngWVzV7UTsgds-nxw&s' alt="logo" />  
            <img className="logo" src={imgSrc} alt="logo" /> */}