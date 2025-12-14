// import reslist from "./../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body: React.FC = () => {
  let [RestaurantList, setRestaurantList] = useState<any[]>([]);
  let [searchText, setSearchText] = useState("");
  console.log("searchX");
  // let [RestaurantList,setRestaurantList]= arr;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
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
                (res) => res.info.avgRating > 4.0
              );
              setRestaurantList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="searchbar">
          {" "}
          <input type="text" name="searchinput" id="searchinput" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }} />
          <button className="searchbtn" onClick={()=>{console.log("search")}}>search</button>
        </div>
      </div>
      <div className="restaurant-container">
        {RestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
