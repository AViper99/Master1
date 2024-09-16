import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="public/index.html">Početna</Link>
          </li>
          <li>
            <Link to="public/Novosti.html">Novosti</Link>
          </li>
          <li>
            <Link to="public/Kontakt.html">Kontakt</Link>
          </li>
          <li>
            <Link to="public/O_nama.html">O nama</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
