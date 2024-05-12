import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SkeletonCard from "./SkeletonCard.js";
import { IMG_CDN_URL } from "../config.js";
import "./stylesheets/RestaurantMenu.css";
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
      <div className="restaurant-header">
        <h1>{restaurantInfo.name} </h1>
        <div className="restaurant-details">
          <img
            className="restaurant-img"
            src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId}
          />
          <div>
            <p>
              &#9734; {restaurantInfo.avgRating} (
              {restaurantInfo.totalRatingsString}) &#183;{" "}
              {restaurantInfo.costForTwoMessage}{" "}
            </p>
            <p>{restaurantInfo.areaName + ", " + restaurantInfo.city}</p>
            <p>{restaurantInfo.cuisines.join(", ")}</p>
          </div>
        </div>
      </div>
      {/* <div>Food category is below</div> */}
      <div>{printMenu(menu)}</div>
    </>
  );
};

export default RestaurantMenu;
