import React from "react";
import { NavLink } from "react-router-dom";

const error1 = () => {
    return (
        <>
            <h1 style={ {top:0, bottom:0, left:0, right:0} }>Oops , page not found</h1>
            <NavLink to="/">Go Back</NavLink>
        </>
    )
}

export default error1;  