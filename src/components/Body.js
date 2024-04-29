import RestaurantCard from './RestaurantCard.js';
import {useState,useEffect} from 'react';
import SkeletonCard from './SkeletonCard.js';


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

  // useEffect(()=>{setTimeout(getRestaurants(),5000)},[]);
  useEffect(()=>{getRestaurants()},[]);  

  async function getRestaurants(){
    try{
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9488237&lng=80.2364283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    if(!response.ok){
      throw new Error(`API request failed with the status:${response.status}`);
      
    }
    
    const json = await response.json();

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
      <div className='restraunt-list'>
        {Array.from({ length: 20 }).map((_, index) => (<SkeletonCard key={index} />))}
      </div>
     ):(
      <>
        
        <div className='search'>
          <input type="text" className='search-input' placeholder='Search' value={searchInput} onChange={(e)=>{
              setSearchInput(e.target.value);
            }} />
          <button className='search-btn' onClick={()=>{
            setFilteredRestaurants(filterData(searchInput,allRestaurants));
            
          }} >Search</button>
        </div>

        <div className='restraunt-list'>
          {
            filteredRestaurants.map((restaurant) =>{
              
              return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            })
          } 
        </div>
      </>
    
  );
  }
  export default Body;