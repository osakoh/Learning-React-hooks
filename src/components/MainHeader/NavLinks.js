import React from "react";

const NavLinks = (props) => {
  return (
    <ul>
      <li>
        <a href='/'>Users</a>
      </li>

      <li>
        <a href='/'>Admin</a>
      </li>

      <li>
        <button onClick={props.logoutUser}>Logout</button>
      </li>
    </ul>
  );
};

export default NavLinks;
