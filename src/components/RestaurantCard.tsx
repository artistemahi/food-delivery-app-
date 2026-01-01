import {BaseURL} from "../utils/constants";
type Info = {
  name: string;
  cuisines: string[];
  costForTwo: string;
  avgRating: number;
  deliveryTime: number;
  cloudinaryImageId: string;
  sla: { deliveryTime: number}
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