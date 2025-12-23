import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Menu_API } from "../utils/constants";
import { useParams } from "react-router";
interface Menutype {
  name: string;
  avgRating: number;
  costForTwoMessage: string;
  deliveryTime: number;
  sla: { deliveryTime: number };
}

const RestaurantMenu: React.FC = () => {
  const [MenuData, setMenuData] = useState<Menutype | null | any>(null);
  // const params = useParams();
  // console.log(params);
  const { menuId } = useParams();

  useEffect(() => {
    //fetch menu data from api
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    //api call logic
    const data = await fetch(
     Menu_API + menuId
    );
    const json = await data.json();
    console.log(json);
    setMenuData(json);
  };
  if (!MenuData) {
    return <Shimmer />;
  }
  const info = MenuData?.data?.cards?.[2]?.card?.card?.info;
  const item =
    MenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2];
  // console.log(item);

  if (!info) return <div>Could not find restaurant menu info</div>;

  const { name, avgRating, costForTwoMessage, sla } = info;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>{avgRating}</p>
      <p>{costForTwoMessage}</p>
      <h2>{sla.deliveryTime} mins</h2>
      <h3>Menu Items:</h3>
      <ul>
        {(item?.card?.card?.itemCards ?? []).map((it: any, idx: number) => (
          <li key={it.card?.info?.id}>
            {it?.card?.info?.name} - {" "} {"₹"} {it?.card?.info?.defaultPrice / 100 || it?.card?.info?.price / 100} 
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
