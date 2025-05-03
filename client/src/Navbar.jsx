import { NavLink } from "react-router";
import { Outlet } from "react-router";

function Navbar() {
    return (
    <div>
      <nav className="nav-bar">
        <NavLink to="/" end> Home </NavLink>
        <ul>
          <li>
            <NavLink to="/todos" end> Your todos </NavLink>
          </li>
          <li>
            <NavLink to="/completed-todos" end> Completed todos </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar