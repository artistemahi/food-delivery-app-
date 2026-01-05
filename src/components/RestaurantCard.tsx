import {BaseURL} from "../utils/constants";
type Info = {
  name: string;
  cuisines: string[];
  costForTwo: string;
  avgRating: number;
  deliveryTime: number;
  cloudinaryImageId: string;
  sla: { deliveryTime: number};
  promoted: boolean;
  id: string;
};
type ResProps = {
  resdata: {
    info: Info;
  };
};
const RestaurantCard: React.FC<ResProps> = (Props) => {
  const { resdata } = Props;
  const { info } = resdata;
  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = info;
  return (
    <div className="restaurant-card">
      <div className="images">
        <img className="logoimg" src={BaseURL + cloudinaryImageId} alt="" />
      </div>
      <h3>{name}</h3>
      <h4 >{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;
// higher order component - a component that wraps another component
 export const withPromotedLabel = (RestaurantCard: React.FC<ResProps>) => {
  return (props:ResProps) =>{
    return (
      <div>
        <div className="absolute bg-black text-white m-2 p-2 rounded-b-lg">Promoted</div>
        <RestaurantCard {...props} />
      </div>
    );
  } 
} ;
