import React, { Fragment } from 'react'
import Header from './../include/header'
import Footer from './../include/footer'
import Menu from './../include/menu'


const Content = () => {
    return ( 
    <Fragment>
            <h2>Home</h2>
    </Fragment> 
    );
}
 


const Home = () => {
    return (  
        <Fragment>
            <Header/>
            <Menu/>
            <Footer/>
        </Fragment>
    );
}
 
export default Home;