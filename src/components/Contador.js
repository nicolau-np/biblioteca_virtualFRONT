import React, {useState, useEffect} from 'react'

const Contador = ()=> {

    const [count, setCount] = useState(0);

    const increment=()=>{
        console.log("click em aumentar")
        setCount(count+1)
    }

    return (
        <div>
            <h3>Contador: {count}</h3>
            <button type="button" onClick={increment}>Aumentar</button>
        </div>    
    );
}

export default Contador;