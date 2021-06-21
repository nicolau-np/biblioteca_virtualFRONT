import { Fragment } from "react";

const Register = () => {
    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [estadoP, setEstadoP] = useState('on')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [acesso, setAcesso] = useState('')
    const [estadoU, setEstadoU] = useState('on')




    return ( 
        <Fragment>
            <form>
                <input type="text" name="nome" value=""
                onChange={(e)=>setNome(e.target.value)}
                /><br/>
                <select name="genero">
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select><br/>
                <input type="email" name="email" value=""/><br/>
                <input type="password" name="password" value=""/><br/>
                <select name="acesso">
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                </select><br/>
                <button type="submit">Registrar</button>
            </form>
        </Fragment>
     );
}
 
export default Register;