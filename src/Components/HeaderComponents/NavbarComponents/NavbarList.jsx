import "./NavbarList.css";
import NavbarListItem from "./NavbarListComponents/NavbarListItem";

const HamburgerCheck = () => {
  return <input type="checkbox" name="check" id="check" className="check" />;
};

const NavbarList = () => {
  const listItem = ["English", "Naira(N)", "About", "Pricing", "Sign in"];

  const listItemMap = listItem.map((items, index) => {
    return <NavbarListItem key={index} item={items} />;
  });

  return <ul className="navbar-list">{listItemMap}</ul>;
};

const Hamburger = () => {
  return (
    <div className="hamburger">
      <div className="hamburger-bar"></div>
    </div>
  );
};

export { HamburgerCheck };
export default NavbarList;
export { Hamburger };
