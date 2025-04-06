import "./NavbarList.css";
import { NavbarListArrow } from "./NavbarListComponents/NavbarListArrow";
import NavbarListPlane from "./NavbarListComponents/NavbarListPlane";


const NavbarArrowList = ["English", "Naira(N)"];
const NavbarPlaneList = ["About", "Pricing", "Sign in"];

function NavbarList() {
  return (
    <ul className="navbar-list-root">
      <NavbarListArrow title={NavbarArrowList[0]} />
      <NavbarListArrow title={NavbarArrowList[1]} />
      <NavbarListPlane title={NavbarPlaneList[0]} />
      <NavbarListPlane title={NavbarPlaneList[1]} />
      <NavbarListPlane title={NavbarPlaneList[2]} />
    </ul>
  )
}

export default NavbarList;