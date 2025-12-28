import {logo_Url} from "./../utils/constants"
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer_container">
      <img   className ="footer_logo" src={logo_Url}></img>
      <div className="copyright-info">Company</div>
      <div className="links">Contact us</div>
      <div className="address">Available in:</div>
      <div className="contact-info">Life at Swiggy</div>
      <div className="social-media-icon">Legal</div>
    </div>   
    </div>
  );
};
export default Footer;