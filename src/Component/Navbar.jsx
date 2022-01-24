import React  from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="navbar-style">
        <Link to="/">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Search/sachin/sharma">Search</Link>
        </div>
        </>
    )
}
export default Navbar;