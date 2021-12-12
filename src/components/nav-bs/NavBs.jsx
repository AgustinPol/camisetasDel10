import React from "react";
import CartWidget from "../cart-widget/CartWidget";
import { Link } from "react-router-dom";

const NavBs = () => {
    return (
      <header>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand btn btn-outline-light" to={"/"}>Camisetas-Shop</Link>
    <button className="navbar-toggler bg-light navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item" style={{margin: 1}}>
          <Link className="nav-link active btn btn-outline-dark" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item" style={{margin: 1}}>
          <a className="nav-link active btn btn-outline-dark" aria-current="page" href="divFooter">Contacto</a>
        </li>
        <li className="nav-item dropdown" style={{margin: 3}}>
          <a className="nav-link active btn dropdown-toggle btn-outline-dark" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Camisetas
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to="/category/nacional" className="nav-link dropdown-item">Nacionales</Link></li>
            <li><Link to="/category/internacional" className="nav-link dropdown-item">Internacionales</Link></li>
            <li><Link to="/category/selecciones" className="nav-link dropdown-item">Selecciones</Link></li>

          </ul>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
      </header>
    )
}
export default NavBs;
