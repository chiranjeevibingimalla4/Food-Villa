import { IMG_CDN_URL } from '../config';
// import './stylesheets/RestaurantCard.css';

const RestaurantCard = ({name,avgRating,cloudinaryImageId,cuisines})=>{
    
    return(
        <div className='card w-52 rounded-lg shadow-md hover:cursor-pointer hover:scale-95'>
            <img className='w-full h-36 object-cover rounded-t-xl rounded-b-sm' src={IMG_CDN_URL+cloudinaryImageId} alt="img" /> 
            <div className="card-info p-3">
                <div className="card-info-name truncate text-lg font-medium">{name}</div>
                <div className="card-info-avgRating text-sm">{avgRating} &#x2606;</div>
                <div className="card-info-cuisines truncate">{cuisines.join(", ")}</div>
            </div>
        </div>
    );
}

export default RestaurantCard;