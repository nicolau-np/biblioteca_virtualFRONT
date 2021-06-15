import React, {useState} from 'react'

const LeitorForm = () => {

    /*dados pessoais*/
    const [nome, setNome] = useState("")
    const [genero, setGenero] = useState("")
    const [bi, setBi] = useState("")
    const [foto, setFoto] = useState("")
    const [estado, setEstado] = useState("on")

    /*dados leitor*/
    const [telefone, setTelefone] = useState("")
    const [bairro, setBairro] = useState("")




    return (
        <div>
            <h3>Formulario de Cadastro de Leitor</h3>
            <form>
               
               <input type="text" name="nome" required="required" placeholder="Nome" /><br/>
               <select name="genero" required>
                    <option value="">Genero</option>
                   <option value="M">M</option>
                   <option value="F">F</option>
               </select><br/>
                <input type="text" name="bi" placeholder="Bilhete de Identidade"/><br/>
                <input type="file" name="foto"/><br/>

                <input type="number" name="telefone" required="required" placeholder="Telefone" /><br/>
                <input type="text" name="bairro" required="required" placeholder="Bairro" /><br/>
            </form>
        </div>
    )
}

export default LeitorForm