import { logo_Url} from "./../utils/constants";
const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={logo_Url}
          alt="company logo"
        />
      </div>
      <div className="nav">
        <ul className="item">Home</ul>
        <ul className="item">About us</ul>
        <ul className="item">contact us</ul>
        <ul className="item">cart</ul>
      </div>
    </div>
  );
};
export default Header;