import logo from "../assets/MLogo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/sellProperty");
  };
  const handlerBuy = () => {
    navigate("/properties");
  };
  const handlerHome = () => {
    navigate("/");
  };
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="logo" onClick={() => handlerHome()}>
          <img className="logoImage" src={logo} alt="Background " />
          <div>
            <p className="Lname1">Toronto </p>
            <p className="Lname2">Properties</p>
          </div>
        </div>
        <ul className="nav-items">
          <li className="dropdownMenu">
            PROPERTIES
            <ol className="sub-menu">
              <li onClick={() => handlerBuy()}>Buy property</li>
              <li onClick={() => handler()}>Sell property</li>
            </ol>
          </li>
          <li>AGENTS</li>
          <li>ABOUTUS</li>
          <button>CONNECT</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
