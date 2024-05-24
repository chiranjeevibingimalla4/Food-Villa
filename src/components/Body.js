import RestaurantCard from './RestaurantCard.js';
import {useState,useEffect,useContext} from 'react';
import SkeletonCard from './SkeletonCard.js';
import {Link} from 'react-router-dom';
import UserContext from '../utils/UserContext.js';


function filterData(searchInput,restaurants){
    
    const data = restaurants.filter((restaurant)=>{
      const name = restaurant.info.name.toLowerCase();
      return name.includes(searchInput.toLowerCase());
    });
    
    return data;
 
}


const Body = () =>{
  const [searchInput,setSearchInput] = useState("");
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);    
  const [allRestaurants, setAllRestaurants] = useState([]); 
  const {user,setUser} = useContext(UserContext);
  // useEffect(()=>{setTimeout(getRestaurants(),5000)},[]);
  useEffect(()=>{getRestaurants()},[]);  

  async function getRestaurants(){
    try{
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9488237&lng=80.2364283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    if(!response.ok){
      throw new Error(`API request failed with the status:${response.status}`);
    }
    
    const json = await response.json();
    // console.log(json);
    //initially allReataurants and filteredRestaurant variable are set with api data
    setFilteredRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    setAllRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    catch(error){
      console.error("Error Fetching Restaurants:",error);
    } 
  
  }
  
  
    
    return allRestaurants.length===0 ?
    ( 
      <div className='restraunt-list flex flex-wrap w-5/6 mx-auto my-6 gap-x-6 gap-y-6'>
        {Array(20).fill("").map((_, index) => (<SkeletonCard key={index} />))}
      </div>
     ):(
      <>
        <div className='my-2 mx-4 text-xl font-bold'>Hey, {user.name} What's on your mind?</div>
        <div className='search flex justify-center my-4'>
          <input type="text" className= 'p-2 mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg' placeholder='Search' value={searchInput} onChange={(e)=>{
              setSearchInput(e.target.value);
            }} />
          <button className='search-btn inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-red-500 border border-red-500 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500' onClick={()=>{
            setFilteredRestaurants(filterData(searchInput,allRestaurants));
            
          }} >Search</button>
          <input className='p-2 mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg'  value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value,})}} />
          <input className='p-2 mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg'  value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value,})}} />
        </div>
        
        <div className='restraunt-list flex flex-wrap justify-center w-10/12 mx-auto gap-x-5 gap-y-6'>
          {
            filteredRestaurants.map((restaurant) =>{
              
              return <Link className='' to={"/res/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info}  /></Link>
            })
          } 
        </div>
      </>
    
  );
  }
  export default Body;