import { Fragment, useState } from "react";

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


    return ( 
        <Fragment>
            <br/><br/><br/>
            {status}
            <form onSubmit={submit}>
                <input type="text" name="nome" value=""
                onChange={(e)=>setNome(e.target.value)}
                /><br/>
                <select name="genero"
                onChange={(e)=>setGenero(e.target.value)}
                >
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select><br/>
                <input type="file" name="foto" value=""
                onChange={(e)=>setFoto(e.target.value)}
                /><br/>
                <input type="email" name="email" value=""
                onChange={(e)=>setEmail(e.target.value)}
                /><br/>
                <input type="password" name="password" value=""
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