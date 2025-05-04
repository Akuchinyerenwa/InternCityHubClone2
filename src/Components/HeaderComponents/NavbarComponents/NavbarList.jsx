import "./NavbarList.css";
import NavbarListItem from "./NavbarListComponents/NavbarListItem";

const NavbarList = () => {
  const listItem = ["English", "Naira(N)", "About", "Pricing", "Sign in"];

  const listItemMap = listItem.map((items, index) => {
    return <NavbarListItem key={index} item={items} />;
  });

  return <ul className="navbar-list">{listItemMap}</ul>;
};

export default NavbarList;
