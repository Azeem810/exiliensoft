import { Wrapper } from "../../StyledComponets/HeaderStyle";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <Wrapper>
      <div className="logo" onClick={handleHome}>
        <img src={Logo} alt="Logo " />
        <p>Digital agency</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/projects"}>Project</Link>
          </li>
        </ul>
        <button onClick={handleContact}>Get In Touch</button>
      </nav>
    </Wrapper>
  );
};

export default Header;
