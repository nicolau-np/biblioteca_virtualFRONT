import React, {useState} from 'react'

const LeitorForm = () => {

    /*dados pessoais*/
    const [nome, setNome] = useState("")
    const [genero, setGenero] = useState("")
    const [bi, setBi] = useState("")
    const [foto, setFoto] = useState("")

    /*dados leitor*/
    const [telefone, setTelefone] = useState("")
    const [bairro, setBairro] = useState("")


    
    return (
        <div>
            <h3>Formulario de Cadastro de Leitor</h3>
        </div>
    )
}

export default LeitorForm