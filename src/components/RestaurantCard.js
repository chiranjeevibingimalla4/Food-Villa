import { IMG_CDN_URL } from "../config.js";

const RestaurantCard = ({name,avgRating,cloudinaryImageId,cuisines})=>{
    
    return(
        <div className='card'>
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="img" /> 
            <h3>{name}</h3>
            <h4>{avgRating} &#x2606;</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>
    );
}

export default RestaurantCard;