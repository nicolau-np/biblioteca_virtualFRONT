import {useHistory} from 'react-router-dom'

const VerifyToken = () => {

const history = useHistory()

    if(window.localStorage.getItem('token')){
        console.log('tem token')
    }else{
        history.push('/')
    }
}
 
export default VerifyToken;