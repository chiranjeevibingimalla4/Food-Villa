import { IMG_CDN_URL } from "../config.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";
import React from "react";
const FoodItem = (props)=>{
    // console.log("Food Item: props");
    

    // console.log(props);
    const { info }= props;
    // console.log(info);
    const { name,price,
        defaultPrice,ratings,description,imageId } = info;
    
    const {rating,ratingCountV2:ratingCount} = ratings?.aggregatedRating;

    const dispatch = useDispatch();
    const handleAddItem = ()=>{
        dispatch(addItem(info));

    }
        
    // console.log("ratings:"+ratings);
    return(
        <>
            <div className="food flex w-7/12 mx-auto my-6 justify-between p-4 rounded-2xl shadow-md">
                <div className="food-details">
                    <div className="food-name text-2xl font-bold">{name}</div>
                    <div className="food-price text-sm font-normal px-1">Rs.{(price)?(price/100):(defaultPrice/100)}</div>
                    {(rating)?(<div className="food-rating text-sm font-normal px-1"><i className="fa-regular fa-star text-green-400"></i>{rating}({ratingCount})</div>):(<></>)}
                    
                    <div className="food-description text-sm font-normal px-1 max-w-96 truncate">{description}</div>
                </div>
                <div className="relative">
                    <img className="food-image w-40 h-24 rounded-2xl" src={IMG_CDN_URL + imageId} alt={name} />
                    <button className="px-3 py-1 absolute -bottom-4 left-12 bg-red-500 text-base font-bold text-white rounded-md my-1 mx-auto hover:text-red-500 hover:bg-white" onClick={()=>{handleAddItem()}}>Add</button>
                </div>
                
            </div>
            {/* <hr className="line" /> */}
        </>
    )
}

export default FoodItem;

