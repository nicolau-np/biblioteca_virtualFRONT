import React, {useState, useEffect, Fragment } from 'react'
import {useHistory} from 'react-router-dom'


const Home = () => {
    const history = useHistory()
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const [acesso, setAcesso] = useState('')


    useEffect(() => {
        me();
    }, []);


    const me  = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/users/me', {
            headers: {
               'Content-Type':'application/json',
               Authorization: 'bearer ' + window.localStorage.getItem('token')
            }
    })

        const content = await response.json()
        if(content.status ==="error"){
            history.push('/login') 
        }else{
            setNome(content.data.pessoa.nome)
            setFoto(content.data.pessoa.foto)
            setAcesso(content.data.acesso)
        }
        console.log(content.data)
    }

    return (  
        <Fragment>
            <br/><br/><br/><br/>
            <h2>Seja Bem vindo {nome}</h2><br/>
            <img src={
            foto===null ? 'http://127.0.0.1:8000/assets/img/photo none.png' : 
            'http://127.0.0.1:8000/'+foto} 
            style={{height:"100px", width:"100px"}} alt="Foto de Perfil"/><br/>

            Nivel de Acesso: {acesso}
        </Fragment>
    );
}
 
export default Home;