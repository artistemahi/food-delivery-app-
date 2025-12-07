import RestaurantCard  from "./RestaurantCard";
import reslist from "./../utils/mockdata";

const Body: React.FC = () => {
  return (
    <div className="body">
      <div className="searchbar">Search bar</div>
      <div className="restaurant-container">
        {reslist.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;