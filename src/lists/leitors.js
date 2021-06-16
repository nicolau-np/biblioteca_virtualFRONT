import React, {useState, useEffect} from 'react'
import axios from 'axios'

const LeitorList = ()=> {

    const [leitors, setLeitors] = useState([])
    const url_path = "http://localhost:8000"
    const url_path2 = "http://localhost:8000/assets/img"

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
            <div>
            <hr/>
            <div className="card">
                <img src={
                    leitor.pessoa.foto === null ? url_path2+"/"+'photo none.png' : 
                    url_path+"/"+leitor.pessoa.foto
                    
                    } alt={ 
                    leitor.pessoa.foto === null ? url_path2+"/"+'photo none.png' : 
                    url_path+"/"+leitor.pessoa.foto
                    } style={{width:'200px', height:'130px'}}/>
                <div className="description">
                    Nome: {leitor.pessoa.nome}<br/>
                    Gênero: {leitor.pessoa.genero}<br/>
                    Telefone: {leitor.telefone}<br/>
                    Bairro: {leitor.bairro}<br/>
                    Bilhete: {leitor.pessoa.bi}<br/>

                </div>
            </div>
            </div>
        ))}
        

    </div>
    )
}

export default LeitorList