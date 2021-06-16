import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './../components/home'
import Sobre from './../components/sobre'

const Routes=()=>{
<BrowserRouter>
<Switch>
    <Route path="/" component={Home}/>
    <Route path="/sobre" component={Sobre}/>
</Switch>
</BrowserRouter>
}

export default Routes