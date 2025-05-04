import "./Navbar.css";
import LinkButton from "./NavbarComponents/LinkButton";
import NavbarList from "./NavbarComponents/NavbarList";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarList />
      <LinkButton content="Start Free Trial" />
    </nav>
  );
};

export default Navbar;
