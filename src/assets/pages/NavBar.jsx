import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul className="flex text-center justify-center gap-10">
        <li>
          <NavLink
            className="text-green-500 no-underline active:text-red-500"
            to={"/Home"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="text-green-500 no-underline" to={"/About"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="text-green-500 no-underline" to={"/Contact"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
