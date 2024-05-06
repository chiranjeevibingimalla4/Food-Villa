import { IMG_CDN_URL } from "../config";
import './stylesheets/FoodItem.css';

const FoodItem = (props)=>{
    console.log("Food Item: props");

    console.log(props);
    const { info }= props;
    const { name,price,ratings,description,imageId } = info;
    
    const {rating,ratingCountV2:ratingCount} = ratings?.aggregatedRating;

    console.log("ratings:"+ratings);
    return(
        <>
            <div className="food">
                <div className="food-details">
                    <div className="food-name">{name}</div>
                    <div className="food-price">Rs.{price/100}</div>
                    {(rating)?(<div className="food-rating"><i className="fa-regular fa-star"></i>{rating}({ratingCount})</div>):(<></>)}
                    
                    <div className="food-description">{description}</div>
                </div>
                <div >
                    <img className="food-image" src={IMG_CDN_URL + imageId} alt={name} />
                </div>
                
            </div>
            {/* <hr className="line" /> */}
        </>
    )
}

export default FoodItem;

