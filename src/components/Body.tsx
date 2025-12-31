// import reslist from "./../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body: React.FC = () => {
  let [RestaurantList, setRestaurantList] = useState<any[]>([]);
  let [FilteredRestaurantList, setFilteredRestaurantList] = useState<any[]>([]);
  let [searchText, setSearchText] = useState("");

  // let [RestaurantList,setRestaurantList]= arr;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // optional chaining
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isOnline = useOnlineStatus();
    if (!isOnline) {
      return (
        <div className="offline-status">
          <h1>You are offline. Please check your internet connection.</h1>
        </div>
      );
    }
  if (RestaurantList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="subHeader">
        <div className="filter">
          <button
            className="filterbtn"
            onClick={() => {
              const filteredList = RestaurantList.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurantList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="searchbar">
          {" "}
          <input
            type="text"
            name="searchinput"
            id="searchinput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchbtn"
            onClick={() => {
              const filterList = RestaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurantList(filterList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {FilteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resdata={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
