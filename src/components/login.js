import React, { Fragment, useState, useEffect } from 'react'

const Login = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    function submit(){
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)

        console.log("logou aqui")
    }

    return (  
        <Fragment>
            <form>
                <input type="email" name="email" 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required /><br/>
                <input type="password" name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/><br/>
                <button type="button" onClick={submit}>Entrar</button>
            </form>
        </Fragment>
    );
}
 
export default Login;