import React, {useState, useEffect} from 'react'
import axios from 'axios'

const LeitorList = ()=> {

    const [leitors, setLeitors] = useState([])
    const url_path = "http://localhost:8000"

    useEffect(()=>{
        axios.get("http://localhost:8000/api/leitors").
        then((response)=>{
            console.log(response.data.data)
            setLeitors(response.data.data)
        })
    }, [])
   

    return (
    <div>
      <h3>Lista de Leitores</h3><br/> 


        {leitors.map(leitor=>(
            <div className="card">
                <img src={url_path+"/"+leitor.pessoa.foto} alt="" style={{width:'200px', height:'130px'}}/>
                <div className="description">
                    Nome: {leitor.pessoa.nome}<br/>
                    Telefone: {leitor.telefone}<br/>
                    Bairro: {leitor.bairro}<br/>
                <hr/>
                </div>
            </div>
        ))}
        

    </div>
    )
}

export default LeitorList