import "./Navbar.css";
import { NavbarButton } from "./NavbarComponents/NavbarButton";
import NavbarList from "./NavbarComponents/NavbarList";


function Navbar() {
  return (
    <nav className="navbar-root">
      <NavbarList />
      <NavbarButton />
    </nav>
  )
}

export {Navbar};