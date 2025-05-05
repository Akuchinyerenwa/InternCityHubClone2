import "./Navbar.css";
import { HamburgerCheck } from "./NavbarComponents/NavbarList";
import NavbarList from "./NavbarComponents/NavbarList";
import LinkButton from "./NavbarComponents/LinkButton";
import { Hamburger } from "./NavbarComponents/NavbarList";

const Navbar = () => {
  return (
    <nav className="navbar">
      <HamburgerCheck />
      <NavbarList />
      <LinkButton content="Start Free Trial" />
      <Hamburger />
    </nav>
  );
};

export default Navbar;
