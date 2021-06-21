import React, {useState, useEffect, Fragment } from 'react'
import VerifyToken from './../middleware/verify_token'

const Home = () => {

    useEffect(()=>{
        VerifyToken.localStoreVerify()
    }, [])



    return (  
        <Fragment>
            <h2>Home</h2>
            <h4>Conteudo da pagina home</h4>
             
        </Fragment>
    );
}
 
export default Home;