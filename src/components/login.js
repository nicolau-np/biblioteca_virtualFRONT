import React, { SyntheticEvent, Fragment, useState} from 'react'
import {useHistory} from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const history = useHistory()

     const submit = async () => {
        e.preventDefault()

        const response = await fetch('http:/localhost:8000/api/users/login', {
            
        })
        
     }

    return (  
        <Fragment>
            
            <form onSubmit={submit}>
                <input type="email" name="email" 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required /><br/>
                <input type="password" name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/><br/>
                <button type="submit">Entrar</button>
            </form>
            
         </Fragment>
    );
}
 
export default Login;