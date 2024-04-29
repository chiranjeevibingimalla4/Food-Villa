import { useState } from "react";
import imgSrc from './food_villa.png';


const Title = ()=>{
    const [url,setURl] = useState();
    return (
        <div className="logo-div">
            <img  className="logo" src={imgSrc} alt="logo" />
            <a href="/" >
                    Food Villa
            </a>
       </div>
    )};



const HeaderComponent = ()=>{
    const [title,setTitle]=useState("Food Villa");
    const [isLogged,setIsLogged] = useState(false);
   return(
       <div className='header'>
           <Title />
           
           <div className='nav-items'>
               <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Contact</li>
                   <li>Cart</li>
               </ul>
           </div>
       </div>
   )
}

export default HeaderComponent;

{/* <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaG7rEM5GObziWvnOrngWVzV7UTsgds-nxw&s' alt="logo" />  
            <img className="logo" src={imgSrc} alt="logo" /> */}