import { FooterWrapper } from "../../StyledComponets/FooterStyle";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="list-one">
        <h6>Digital agency</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in
          volutpat ullamcorper amet adipiscing fermentum.
        </p>
        <div className="list-one-child">
          <img src={twitter} alt="twitter image" />
          <img src={facebook} alt="facebook image" />
          <img src={instagram} alt="instagram image" />
        </div>
      </div>
      <div className="list-two">
        <h6>Company</h6>
        <ul>
          <li>
            {" "}
            <a href="#">About</a>
          </li>
          <li>
            {" "}
            <a href="#">Features</a>
          </li>
          <li>
            {" "}
            <a href="#">Works</a>
          </li>
          <li>
            {" "}
            <a href="#">Career</a>
          </li>
        </ul>
      </div>
      <div className="list-three">
        <h6>Help</h6>
        <ul>
          <li>
            {" "}
            <a href="#">Customer Support</a>
          </li>
          <li>
            {" "}
            <a href="#">Delivery Details</a>
          </li>
          <li>
            {" "}
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            {" "}
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="list-four">
        <h6>Resources</h6>
        <ul>
          <li>
            {" "}
            <a href="#">Free eBooks</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">How to - Blog</a>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
