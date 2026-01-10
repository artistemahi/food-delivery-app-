import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenu: React.FC = () => {
  const MenuData = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState<number | undefined>();
  if (!MenuData) {
    return <Shimmer />;
  }
  const info = MenuData?.data?.cards?.[2]?.card?.card?.info;
  if (!info) return <div>Could not find restaurant menu info</div>;
  console.log(info); // restaurant info
  const itemList =
    MenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(itemList);   // full item list
  const categories = itemList?.filter(
    (c: any) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories); // only categories

  const { name, avgRating, costForTwoMessage, sla } = info;
  return (
    <>
      <div className=" flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="bg-green-500 text-white px-4 py-1 rounded">{avgRating}</p>
        <p>{costForTwoMessage}</p>
      </div>
      <div className="text-center ">
        <h3>Menu Items:</h3>

        {categories.map((category: any, index: number) => (
          <ItemList
            key={category?.card?.card?.parentId}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};
export default RestaurantMenu;
