import React, {useState, useEffect} from 'react'
import axios from 'axios'

const LeitorList = ()=> {

    const [leitors, setLeitors] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/leitors').
        then((response)=>{
            console.log(response.data.data)
            setLeitors(response.data.data)
        })
    }, [])
   

    return (
    <div>
      <h3>Lista de Leitores</h3><br/> 

        <div className="card">
            <img src="none.jpg" alt="" style={{width:'200px', height:'130px'}}/>
            <div className="description">
               Hello world
            </div>
        </div>

    </div>
    )
}

export default LeitorList