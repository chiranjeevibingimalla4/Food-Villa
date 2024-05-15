import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SkeletonCard from "./SkeletonCard.js";
import FoodCategory from "./FoodCategory.js";
import useRestaurant from "./useRestaurant.js";


const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantInfo,menu] = useRestaurant(id);
  console.log(menu);
  function printMenu(menu) {
    
    for (let i = 2; i < menu.length - 2; i++) {
      const cate = menu[i];
      if (cate?.card?.card?.itemCards) {
        // const a = cate?.card?.card?.itemCards;
        return (
          <FoodCategory
            title={cate?.card?.card?.title}
            itemCards={cate?.card?.card?.itemCards}
          />
        );
      }
      
    }
  }

  return !restaurantInfo ? (
    <SkeletonCard />
  ) : (
    <>
      <div className="restaurant-header flex flex-col w-1/3 my-3 mx-auto p-2 border-solid rounded-xl border-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="my-3 text-2xl font-bold underline mx-auto">{restaurantInfo.name} </div>
        <div className="mx-auto">
        <p>
              <span className="text-green-500 font-bold">&#9734;</span> {restaurantInfo.avgRating} (
              {restaurantInfo.totalRatingsString}) &#183;{" "}
              {restaurantInfo.costForTwoMessage}{" "}
            </p>
            <p>{restaurantInfo.areaName + ", " + restaurantInfo.city}</p>
            <p>{restaurantInfo.cuisines.join(", ")}</p>
        </div>
            
        </div>
      <div>{printMenu(menu)}</div>
    </>
  );
};

export default RestaurantMenu;
