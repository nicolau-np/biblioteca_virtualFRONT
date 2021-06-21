import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


const Logout = async () => {

    const history = useHistory()

         const response = await fetch('http://127.0.0.1:8000/api/users/logout', {
            headers: {
               'Content-Type':'application/json',
               Authorization: 'bearer ' + window.localStorage.getItem('token')
            },
        })

        const content = await response.json()
        if(content.status=="success"){
            return history.push('/login')
            //window.localStorage.removeItem('token')
        }else{
          return history.push('/')
        }

}
 
export default Logout;