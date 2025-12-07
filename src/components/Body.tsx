import reslist from "./../utils/mockdata";
import RestaurantCard  from "./RestaurantCard";
import { useState } from "react";


const Body: React.FC = () => {
  let [RestaurantList, setRestaurantList] = useState(reslist);
  return (
    <div className="body">
      <div className="filter">
        <button className="filterbtn"
          onClick={()=>{
            const filteredList = RestaurantList.filter((res)=>res.info.avgRating > 4.5)
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