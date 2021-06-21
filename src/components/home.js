import React, {useState, useEffect, Fragment } from 'react'
import {useHistory} from 'react-router-dom'


const Home = () => {
    const history = useHistory()

    useEffect(() => {
        me();
    }, []);


    const me  = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/users/me', {
            headers: {
               'Content-Type':'application/json',
               Authorization: 'bearer ' + window.localStorage.getItem('token')
            },
    })

        const content = await response.json()
        if(content.status ==="error"){
            history.push('/login') 
        }
        console.log(content)
    }

    return (  
        <Fragment>
            <h2>Home</h2>
            <h4>Conteudo da pagina home</h4>
             
        </Fragment>
    );
}
 
export default Home;