import { useState,useEffect } from "react";

const useRestaurant = (id)=>{
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menu, setMenu] = useState(null);
  useEffect(() => {getRestaurantMenu();}, []);

  const link =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9488237&lng=80.2364283&restaurantId=" +
    id +
    "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";

  async function getRestaurantMenu() {
    const response = await fetch(link);
    const json = await response.json();
    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setRestaurantInfo(json.data.cards[2].card.card.info);
  }
  return [restaurantInfo,menu];  
}

export default useRestaurant;