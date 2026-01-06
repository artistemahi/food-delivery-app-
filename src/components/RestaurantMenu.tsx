import { useEffect, useState } from "react";
import { dropdown_symbol, BaseURL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemList from "./ItemList";

const RestaurantMenu: React.FC = () => {
  const MenuData = useRestaurantMenu();

  if (!MenuData) {
    return <Shimmer />;
  }
  const info = MenuData?.data?.cards?.[2]?.card?.card?.info;
  const item =
    MenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2];
  console.log(item);
  const itemList= MenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  console.log(itemList);
  if (!info) return <div>Could not find restaurant menu info</div>;

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
        <div className=" bg-gray-50 w-full shadow-lg p-4  ">
          <ItemList />
          <ul>
            {(item?.card?.card?.itemCards ?? []).map((it: any, idx: number) => (
              <li key={it.card?.info?.id}>
                {it?.card?.info?.name} - {"₹"}{" "}
                {it?.card?.info?.defaultPrice / 100 ||
                  it?.card?.info?.price / 100}
                <img
                  className="h-10 w-10"
                  src={BaseURL + it?.card?.info?.imageId}
                ></img>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
