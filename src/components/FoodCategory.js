import FoodItem from "./FoodItem.js";
import React from "react";
const FoodCategory = ({title,itemCards})=>{
    // console.log("Food category");
    // console.log("title: "+title);
    // console.log("itemCards: "+ JSON.stringify(itemCards));
    
    return(
        <>
            {/* <div>Category:{title}</div> */}
            {itemCards.map((itemCard)=>{
                return <FoodItem info={itemCard.card.info} key={itemCard.card.info.id} />
            })}
        </>
    )
}

export default FoodCategory;