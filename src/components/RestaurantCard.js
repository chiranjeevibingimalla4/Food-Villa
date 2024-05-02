import { IMG_CDN_URL } from "../config.js";
import './stylesheets/RestaurantCard.css';

const RestaurantCard = ({name,avgRating,cloudinaryImageId,cuisines})=>{
    
    return(
        <div className='card'>
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="img" /> 
            <div className="card-info">
                <div className="card-info-name">{name}</div>
                <div className="card-info-avgRating">{avgRating} &#x2606;</div>
                <div className="card-info-cuisines">{cuisines.join(", ")}</div>
            </div>
        </div>
    );
}

export default RestaurantCard;