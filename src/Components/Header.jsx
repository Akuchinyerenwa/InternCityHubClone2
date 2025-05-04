import InterncityHubLogo from "../Images/InterncityHubLogo.jpg";
import Navbar from "./HeaderComponents/Navbar";

const Header = () => {
  return (
    <header className="header-root">
      <a href="#" className="logo">
        <img src={InterncityHubLogo} alt="Intercity Hub Logo" />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
