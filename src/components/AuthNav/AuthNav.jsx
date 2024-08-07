import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function AuthNav() {
  return (
    <nav>
      <NavLink
        style={{ marginRight: "25px" }}
        className={buildLinkClass}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </nav>
  );
}
