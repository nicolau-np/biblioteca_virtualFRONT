import React, { Fragment } from 'react'
import Header from './../include/header'
import Footer from './../include/footer'
import Menu from './../include/menu'


const Content = () => {

    const contentStyle = {
        backgroundColor: 'yellow'
    }

    return ( 
    <div style={contentStyle}>
            <h2>Home</h2>
            <h4>Conteudo da pagina home</h4>
    </div> 
    );
}
 


const Sobre = () => {
    return (  
        <Fragment>
            <Header/>
            <Menu/>
            <Content/>
            <Footer/>
        </Fragment>
    );
}
 
export default Sobre;