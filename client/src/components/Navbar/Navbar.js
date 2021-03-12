import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand text-white" href="#">Google Books</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/" className="nav-link text-white">Search</Link>
      </li>
      <li className="nav-item">
      <Link to="/saved" className="nav-link text-white">Saved</Link>
      </li>

    </ul>
  </div>
</nav>
    )
}

export default Navbar
