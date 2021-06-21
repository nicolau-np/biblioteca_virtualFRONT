import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from '../components/login'
import Home from './../components/home'
import Sobre from './../components/sobre'
import Logout from './../components/logout'
import Error404 from './../errors/e404'

 const Routes=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/sobre" component={Sobre}/>
            <Route exact path="/logout" component={Logout}/>
            <Route path="*" component={Error404}/>
        </Switch>
    );
}

export default Routes

