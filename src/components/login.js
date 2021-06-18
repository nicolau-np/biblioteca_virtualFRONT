import React, { Fragment, useState, useEffect } from 'react'
import api_token from './../services/api_token'

const Login = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    function submit(){
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)

            const response = await api.post('users/login', formData)
            .then(resp=>{
                console.log('logado com sucesso')
            })
            .catch(error=>{
                console.log(error)
            })
          
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