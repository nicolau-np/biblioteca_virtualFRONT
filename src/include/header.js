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
                    <li>Home</li>
                    <li>Autores</li>
                    <li>Sobre</li>
                </ul>
            </div>
        </div>
    </div> 
    );
}
 
export default Header;