import { logo_Url } from "./../utils/constants";
import { vegetable_right } from "./../utils/constants";
import { vegetable_left } from "./../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header: React.FC = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const isOnline = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);


  // subscribing to the store 
  const cartItems= useSelector((store:any)=>
    store.cart.items
  )
  console.log(cartItems);
  return (
    <>
      <div className="header">
        <div className="logo-logo-container">
          <Link to="/">
            <img className="logobg" src={logo_Url} alt="company logo" />
          </Link>
        </div>
        <div className="nav">
          <ul className="item">Online Status: {isOnline ? "✅" : "🔴"}</ul>
          <ul className="item">Swiggy Corporate</ul>
          <ul className="item">
            <Link to="/about">About us</Link>
          </ul>
          <ul className="item">
            <Link to="/contact">Contact</Link>
          </ul>
          <ul className="cart"><Link to= "/cart">🛒({cartItems.length})</Link></ul>
          <ul className="item">
            <Link to="/grocery">Grocery</Link>
          </ul>
          <ul className="font-bold text-black">User: {loggedInUser}</ul>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </div>
      </div>
      <div className="tagline-container">
        <div className="vegetable_bg_container">
          <img
            className="vegetable_bg_right"
            src={vegetable_right}
            alt="vegetable_bg"
          />
          <img
            className="vegetable_bg_left"
            src={vegetable_left}
            alt="vegetable_bg"
          />
        </div>
        <div className="tagline-text">
          Order food & groceries.<br></br> Discover best restaurants. Swiggy it!
        </div>

        <div className="input-container">
        
          <input
            type="text"
            placeholder= " Enter your delivery location"
            className="bg-amber-50  searchbar1"
          />
          <input
            type="text"
            placeholder="Search for the restaurant, item or more"
            className="bg-amber-50 searchbar2"
          />
        </div>
      </div>
    </>
  );
};
export default Header;
