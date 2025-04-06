import "./Header.css";
import Logo from "./HeaderComponents/Logo";
import { Navbar } from "./HeaderComponents/Navbar";



function Header() {
  return (
    <header className="header-root">
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header;