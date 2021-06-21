import React, {useState, useEffect, Fragment } from 'react'

const Home = () => {

    useEffect(() => {
        me();
    }, []);


    const me  = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/users/me', {
                headers: {'Content-Type':'application/json'},
                credentials: 'include'
        })

        const content = await response.json()
    }

    return (  
        <Fragment>
            <h2>Home</h2>
            <h4>Conteudo da pagina home</h4>
             
        </Fragment>
    );
}
 
export default Home;