import { logo_Url } from "./../utils/constants";
import { useState } from "react";
const Header: React.FC = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={logo_Url} alt="company logo" />
      </div>
      <div className="nav">
        <ul className="item">Home</ul>
        <ul className="item">About us</ul>
        <ul className="item">contact us</ul>
        <ul className="item">cart</ul>
        <button
          className="login"
          onClick={() => {
            loginBtn === "Login" ? setloginBtn("Logout") : setloginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
};
export default Header;
