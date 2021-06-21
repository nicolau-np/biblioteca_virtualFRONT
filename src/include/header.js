import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const Header = () => {

    const logout = async () => {
        await fetch('http://127.0.0.1:8000/api/users/logout', {
            headers: {
               'Content-Type':'application/json',
               Authorization: 'bearer ' + window.localStorage.getItem('token')
            },
        })
    }



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
                    <li><Link to="/login" onClick={logout}>Logout</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </div>
        </div>
    </div> 
    );
}
 
export default Header;