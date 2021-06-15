import React, {useState, useEffect} from 'react'

const Contador = ()=> {

    const [count, setCount] = useState(0);
    const [status, setStatus] = useState('');

    const increment=()=>{
        if(count==30){
            setStatus("Chegou o fim da contagem")
        }else{
           console.log("click em aumentar")
            setCount(count+1) 
        }
        
    }

    return (
        <div>
            <h3>Contador: {count}%</h3><br/>
            <span style={{color:'red'}}>{status}</span><br/> 
            <button type="button" onClick={increment}>Aumentar</button>
        </div>    
    );
}

export default Contador;