import React, {Fragment, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [status, setStatus] = useState([])
    const history = useHistory()


    useEffect(() => {
        me();
    }, []);

    const me = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/users/me', {
            headers: {
               'Content-Type':'application/json',
               Authorization: 'bearer ' + window.localStorage.getItem('token')
            }
        })

        const content = await response.json()
        if(content.status === "error"){

        }else{
            history.push('/')
        }
    }
    
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
            setStatus(content.data)
        }else if(content.status === "ok"){
           history.push('/') 
           window.localStorage.setItem('token', content.access_token)
           console.log(content)
        }
        
        console.log(content.status)
     }


     {/*if(redirect){
         return <Redirect to="/"/>;
     }*/}

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