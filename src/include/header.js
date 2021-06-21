import React from 'react'

const Header = () => {
    return ( 
    <div className="container">
        <div className="header">

            <div className="logo">
                <h1>Biblioteca Virtual</h1>
            </div>

            <div className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/autores">Autores</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </div>
    </div> 
    );
}
 
export default Header;