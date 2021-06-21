import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const Header = () => {

    const logout = async () => {
        const history = useHistory()

         const response = await fetch('http://127.0.0.1:8000/api/users/logout', {
            headers: {
               'Content-Type':'application/json',
               Authorization: 'bearer ' + window.localStorage.getItem('token')
            },
        })

        const content = await response.json()
        if(content.status=="success"){
            return history.push('/login')
            //window.localStorage.removeItem('token')
        }else{
          return history.push('/')
        }
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
                    <li><Link to="#" onClick={logout}>Logout</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </div>
        </div>
    </div> 
    );
}
 
export default Header;