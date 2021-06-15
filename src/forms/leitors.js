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


   async function submit(){
        const formData = new FormData()
        formData.append('nome', nome)
        formData.append('genero', genero)
        formData.append('bi', bi)
        formData.append('foto', foto)
        formData.append('estado', estado)

        formData.append('telefone', telefone)
        formData.append('bairro', bairro)

        let result = await fetch('http://localhost:8000/api/leitors/store',{
            method:'POST',
            body: formData
        })
        
    }

    return (
        <div>
            <h3>Formulario de Cadastro de Leitor</h3>
            <form>
               
               <input type="text" name="nome" required="required" placeholder="Nome" 
               onChange={(e)=>setNome(e.target.value)}
               /><br/>
               <select name="genero" required="required" 
               onChange={(e)=>setGenero(e.target.value)}
               >
                    <option value="">Genero</option>
                   <option value="M">M</option>
                   <option value="F">F</option>
               </select><br/>
                <input type="text" name="bi" placeholder="Bilhete de Identidade" 
                onChange={(e)=>setBi(e.target.value)}
                /><br/>
                <input type="file" name="foto"
                onChange={(e)=>setFoto(e.target.files[0])}
                /><br/>

                <input type="number" name="telefone" required="required" placeholder="Telefone" 
                onChange={(e)=>setTelefone(e.target.value)}
                /><br/>
                <input type="text" name="bairro" required="required" placeholder="Bairro" 
                onChange={(e)=>setBairro(e.target.value)}
                /><br/>

                <button onClick={submit}>Enviar</button>
            </form>
        </div>
    )
}

export default LeitorForm