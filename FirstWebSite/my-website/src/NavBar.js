import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
<nav>
    <ui>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/article">Article</Link>
        </li>
        <li>
            <Link to="/articles-list">Articles List</Link>
        </li>
    </ui>
</nav>
);

export default NavBar;