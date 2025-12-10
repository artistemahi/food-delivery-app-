import reslist from "./../utils/mockdata";
import RestaurantCard  from "./RestaurantCard";
import { useEffect, useState } from "react";


const Body: React.FC = () => {
  let [RestaurantList,setRestaurantList] = useState<any[]>([]);
  // let [RestaurantList,setRestaurantList]= arr;
  useEffect(()=>{
    fetchData();
  },[])
  const   fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    // optional chaining
    setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filterbtn"
          onClick={()=>{
            const filteredList = RestaurantList.filter((res)=>res.info.avgRating > 4.6
              )
            setRestaurantList(filteredList);
          }}
        >Top Rated Restaurant</button>
      </div>
      <div className="searchbar">Search bar</div>
      <div className="restaurant-container">
        
        {RestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;