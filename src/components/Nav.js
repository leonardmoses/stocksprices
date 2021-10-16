import React from "react";
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <div>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/dashboard">
                <h1>Stocks List</h1>
            </Link>
            <Link to="/about">
            <h1>about</h1>
        </Link>
        </div>
    )
}

export default Nav;