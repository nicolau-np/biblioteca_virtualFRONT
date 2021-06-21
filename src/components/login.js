import React, { SyntheticEvent, Fragment, useState} from 'react'
import {useHistory} from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [status, setStatus] = useState([])
    const history = useHistory()

     const submit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/api/users/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email,
                password,
            })
        })

        const content = await response.json()
        if(content.status === "Unauthorized"){
            setStatus(content.data);
        }else if(content.status === "ok"){
           history.push('/') 
        }
        
        console.log(content.status)
     }

    return (  
        <Fragment>
            <br/>
            <br/>
            <br/>
            <div style={{color:"red"}}>
               {status} 
            </div>
            
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