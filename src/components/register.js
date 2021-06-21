import { Fragment } from "react";

const Register = () => {
    return ( 
        <Fragment>
            <form>
                <input type="text" name="nome" value=""/><br/>
                <select name="genero">
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select><br/>
                <input type="text" name="email" value=""/><br/>
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