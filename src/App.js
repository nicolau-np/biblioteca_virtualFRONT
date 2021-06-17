import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './web/Routes'

import Header from './include/header'
import Footer from './include/footer'
import Menu from './include/menu'

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Menu/>
        <Routes/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
