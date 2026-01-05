import { useEffect, useState } from "react";
import { dropdown_symbol } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu: React.FC = () => {
  const MenuData = useRestaurantMenu();

  if (!MenuData) {
    return <Shimmer />;
  }
  const info = MenuData?.data?.cards?.[2]?.card?.card?.info;
  const item =
    MenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2];
  console.log(item);

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
        <div className=" bg-gray-50 w-full shadow-lg p-4 flex justify-between">
          <p className="p-4">Recommended</p>
          <img className="h-5 w-5" src={dropdown_symbol}></img>
        </div>
        <ul>
          {(item?.card?.card?.itemCards ?? []).map((it: any, idx: number) => (
            <li key={it.card?.info?.id}>
              {it?.card?.info?.name} - {"₹"}{" "}
              {it?.card?.info?.defaultPrice / 100 ||
                it?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
