import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


const Logout = () => {
   
    useEffect(() => {
        logme()
    }, [])

    const logme = async () =>{
        const response = await fetch('http://127.0.0.1:8000/api/users/logout', {
            headers: {
               'Content-Type':'application/json',
               Authorization: 'bearer ' + window.localStorage.getItem('token')
            },
        })

        const content = await response.json()
        if(content.status=="success"){
            history.push('/login')
            //window.localStorage.removeItem('token')
        }else{
            history.push('/')
        }
        console.log(content)
    }

    return(
    <div></div>
    );
}
 
export default Logout;