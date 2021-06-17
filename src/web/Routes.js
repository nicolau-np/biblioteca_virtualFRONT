import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../components/home'
import Sobre from '../components/sobre'

export default ()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sobre" component={Sobre}/>
        </Switch>
    );
}

