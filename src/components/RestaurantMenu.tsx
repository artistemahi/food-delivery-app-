import {useEffect,useState} from "react"; 
import Shimmer from "./Shimmer";
const RestaurantMenu =()=>{
  const [MenuData, setMenuData] = useState(null);
    useEffect (()=>{
    //fetch menu data from api
    fetchMenu();
  },[]);
  const fetchMenu = async()=>{
    //api call logic
    const data = await fetch ("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6426028&lng=77.21921669999999&restaurantId=709678&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
  }
    return (MenuData===null)? <Shimmer/> : (
        <div className="restaurant-menu">
            <h1>RestaurantName</h1>
            <p>Rating</p>
            <p>200 for two </p>
            <h2>10 mins</h2>
        </div>
    )
}
export default RestaurantMenu;
