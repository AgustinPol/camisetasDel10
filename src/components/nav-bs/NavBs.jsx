import React, { useState, useContext, useEffect } from "react";
import CartWidget from "../cart-widget/CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebase"; 
import { getDocs, collection } from "firebase/firestore"

const NavBs = () => {
  const { cart } = useContext(CartContext);
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getDocs(collection(db, "categories")).then((querySnapshot) => {
const categories = querySnapshot.docs.map(doc => {
  return {id:doc.id, ...doc.data() }
})
setCategories(categories)
    })
    
  },[])
   
    return (
<header>
  <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
    <div className="container-fluid">
      <Link className="navbar-brand btn btn-outline-light" to={"/"}>Camisetas-Shop</Link>
        <button className="navbar-toggler bg-light navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-dark"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {
            categories.map(cat => 
            <li className="nav-item col-lg-5" style={{margin: "0.5rem"}}>
            <Link key={cat.id}  to={`/category/${cat.id}`} className="nav-link active btn btn-outline-light" aria-current="page" href="divFooter">{cat.description}</Link>
          </li>)}
          {/* <li className="nav-item col-lg-5" style={{margin: "0.5rem"}}>
            <Link to="/category/internacional" className="nav-link active btn btn-outline-light" aria-current="page" href="divFooter">Internacionales</Link>
          </li>
          <li className="nav-item col-lg-5" style={{margin: "0.5rem"}}>
            <Link to="/category/selecciones" className="nav-link active btn btn-outline-light" aria-current="page" href="divFooter">Selecciones</Link>
          </li> */}
        </ul>
      </div>
    </div>
  <>
  { cart.length !== 0 ? <CartWidget/> : null }
  </>  
  </nav>
</header>
    )
}
export default NavBs;
