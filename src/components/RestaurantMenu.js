import { useParams } from "react-router-dom";
import {useState , useEffect} from "react";
import SkeletonCard from "./SkeletonCard.js";
import { IMG_CDN_URL } from "../config.js";
import "./stylesheets/RestaurantMenu.css";
import FoodCategory from './FoodCategory.js';



const RestaurantMenu =()=>{
    const [restaurantInfo,setRestaurantInfo] = useState(null);
    const [menu,setMenu] = useState(null);
    useEffect(()=>{getRestaurantMenu()},[]);
    const {id} = useParams();
    const link = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9488237&lng=80.2364283&restaurantId=" + id + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";
    

    async function getRestaurantMenu(){
        const response =await fetch(link);
        const json = await response.json();
        // console.log(json);
        // console.log("Offers:");
        // console.log(json.data.cards[3].card.card.gridElements.infoWithStyle.offers);
        console.log("menu");
        setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);      
        setRestaurantInfo(json.data.cards[2].card.card.info);
        
    }

    function printMenu(menu){
        for(let i=2;i<menu.length-2;i++){
            const cate = menu[i];
            if(cate?.card?.card?.itemCards){
                const a = cate?.card?.card?.itemCards;
                return <FoodCategory title={cate?.card?.card?.title} itemCards={cate?.card?.card?.itemCards}  />
            }
           
        }
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
            <div>Food category is below</div>
            <div>{printMenu(menu)}</div>
        </>
    );
};

export default RestaurantMenu;