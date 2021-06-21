import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from '../components/login'
import Home from './../components/home'
import Register from './../components/register'
import Sobre from './../components/sobre'
import Error404 from './../errors/e404'

 const Routes = () =>{
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/sobre" component={Sobre}/>
            <Route path="*" component={Error404}/>
        </Switch>
    );
}

export default Routes

