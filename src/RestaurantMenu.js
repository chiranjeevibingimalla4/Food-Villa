import { useParams } from "react-router-dom";
import {useState , useEffect} from "react";
import SkeletonCard from "./components/SkeletonCard";
import { IMG_CDN_URL } from "./config";
import "./components/stylesheets/RestaurantMenu.css"

const RestaurantMenu =()=>{
    const [restaurantInfo,setRestaurantInfo] = useState(null);
    useEffect(()=>{getRestaurantMenu()},[]);
    const {id} = useParams();
    const link = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9488237&lng=80.2364283&restaurantId=" + id + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";

    async function getRestaurantMenu(){
        const response =await fetch(link);
        const json = await response.json();
        console.log(json);
        console.log(json.data.cards[2].card.card.info);
        setRestaurantInfo(json.data.cards[2].card.card.info)
    }
    return (!restaurantInfo)?(<SkeletonCard />):(
        <>  
            <div className="restaurant-header">
            <h1>{restaurantInfo.name} </h1>              
                <div className="restaurant-details">
                    <img className="restaurant-img" src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId} />
                    <div>
                        <p>&#9734; {restaurantInfo.avgRating} ({restaurantInfo.totalRatingsString})  &#183; {restaurantInfo.
costForTwoMessage} </p>
                        <p>{restaurantInfo.areaName+", "+restaurantInfo.city}</p>
                        <p>{restaurantInfo.cuisines.join(", ")}</p>
                    </div>
                    
                </div>
                
            </div>
            
        </>
    );
};

export default RestaurantMenu;