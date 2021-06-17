import React, { Fragment, useState, useEffect } from 'react'

const Login = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    function submit(){
        
    }

    return (  
        <Fragment>
            <form>
                <input type="email" name="email" 
                onChange={(e)=>setEmail(e.target.value)}
                required /><br/>
                <input type="password" name="password"
                onChange={(e)=>setPassword(e.target.value)}
                required/><br/>
                <button type="button" onClick={submit}>Entrar</button>
            </form>
        </Fragment>
    );
}
 
export default Login;