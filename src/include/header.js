import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return ( 
    <div className="container">
        <div className="header">

            <div className="logo">
                <h1>Biblioteca Virtual</h1>
            </div>

            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/autores">Autores</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </div>
        </div>
    </div> 
    );
}
 
export default Header;