import "./NavbarListArrow.css";


function NavbarListArrow({title}) {
  return (
    <li className="navbar-list-arrow">
      <a href="#">
        {title}
      </a>
      <span></span>
    </li>
  )
}

export {NavbarListArrow};