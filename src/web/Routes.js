import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './../components/home'
import Sobre from './../components/sobre'
import Error404 from './../errors/e404'

 const Routes=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sobre" component={Sobre}/>
            <Route path="*" component={Error404}/>
        </Switch>
    );
}

export default Routes

