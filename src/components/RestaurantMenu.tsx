import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
interface Menutype {
  name: string;
  avgRating: number;
  costForTwoMessage: string;
  deliveryTime: number;
  sla: { deliveryTime: number };
};

const RestaurantMenu: React.FC = ( ) => {
  const [MenuData, setMenuData] = useState<Menutype|null|any>(null);
  useEffect(() => {
    //fetch menu data from api
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    //api call logic
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6426028&lng=77.21921669999999&restaurantId=709678&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setMenuData(json);
    
  };
if (!MenuData) {
    return <Shimmer />;
  }
  const info = MenuData?.data?.cards?.[2]?.card?.card?.info;
  const item = MenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1];
  console.log(item);

  if (!info) return <div>Could not find restaurant menu info</div>;

  const { name, avgRating, costForTwoMessage, sla } = info;

  return(
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>{avgRating}</p>
      <p>{costForTwoMessage}</p>
      <h2>{sla.deliveryTime} mins</h2>
    </div>
  );
};
export default RestaurantMenu;
