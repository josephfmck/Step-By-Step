import React from "react";
import './style.css';




function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Home  |
      </a>
      <a className="navbar-brand" href="/FormPage">
        Create |
      </a>
    </nav>
  );
}


export default Nav;
