import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './web/Routes'

import Header from './include/header'
import Footer from './include/footer'

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
