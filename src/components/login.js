import axios from 'axios'
import React, { Fragment, useState} from 'react'
import {useHistory} from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const history = useHistory()

     async function submit(ev){
       ev.preventDefault();
      const response = await axios.post('http://127.0.0.1:8000/api/users/login', {
           email, 
           password
       }).then((response)=>{
            history.push('/')
       }).catch((error)=> {
           {/*if(error.data.status === 'Unauthorized'){
                alert('Erro no usuario ou palavra passe')
           }else{
                alert('Deve preencher os campos obrigatorios')
           }*/}
           
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