import { Fragment, useState, useEffect } from "react";

const Register = () => {
    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [estadoP, setEstadoP] = useState('on')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [acesso, setAcesso] = useState('')
    const [foto, setFoto] = useState('')
    const [estadoU, setEstadoU] = useState('on')
    const [status, setStatus] = useState('')
    const [stay, setStay] = useState(false)


    useEffect(() => {
        middlewareAdmin()
    }, [])

    const middlewareAdmin = async () =>{
        const response = await fetch('http://127.0.0.1:8000/api/admin', {
            headers: {
               'Content-Type':'application/json',
               Authorization: 'bearer ' + window.localStorage.getItem('token')
            }
        })

        const content = await response.json() 
        if(content.status === "Unauthorized"){
            setStay(false)
        }else{
            setStay(true)
        }
    }

    const submit = async (e) => {
        e.preventDefault()
        
        const response = await fetch('http://127.0.0.1:8000/api/users/register', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            
            body: JSON.stringify({
                nome,
                genero,
                estadoP,
                email,
                password,
                acesso,
                foto,
                estadoU,
            })
        })

        const content = await response.json()
        if(content.status === "success"){
            setStatus(content.data)
            console.log(content)
        }else{
            console.log(content)
        }
    }

    if(!stay){
        return (
            <div>
                <h1>Acesso Negado para este usuario</h1>
            </div>
        );
    }

    return ( 
        <Fragment>
            <br/><br/><br/>
            {status}
            <form onSubmit={submit}>
                <input type="text" name="nome" value={nome}
                onChange={(e)=>setNome(e.target.value)}
                /><br/>
                <select name="genero"
                onChange={(e)=>setGenero(e.target.value)}
                >
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select><br/>
                <input type="file" name="foto"
                onChange={(e)=>setFoto(e.target.files[0])}
                /><br/>
                <input type="email" name="email" value={email}
                onChange={(e)=>setEmail(e.target.value)}
                /><br/>
                <input type="password" name="password" value={password}
                onChange={(e)=>setPassword(e.target.value)}
                /><br/>
                <select name="acesso"
                onChange={(e)=>setAcesso(e.target.value)}
                >
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                </select><br/>
                <button type="submit">Registrar</button>
            </form>
        </Fragment>
     );
}
 
export default Register;