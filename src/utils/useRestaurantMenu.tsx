import { Menu_API } from "../utils/constants";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
interface Menutype {
  name: string;
  avgRating: number;
  costForTwoMessage: string;
  deliveryTime: number;
  sla: { deliveryTime: number };
  data: any;
}
const useRestaurantMenu = () => {
  const [MenuData, setMenuData] = useState<Menutype>();
  const { menuId } = useParams();
  // console.log(menuId);
  // Hook implementation goes here
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_API + menuId);
    const json = await data.json();
    setMenuData(json);
    // console.log(MenuData);
  };

  return MenuData;
};
export default useRestaurantMenu;
