import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import firebaseApp from './../firebase/firebaseConfig'
import AuthContext from './../auth/AuthContext';
import Button from '../components/buttons/Button';
import FormInput from '../components/forms/FormInput';

const LoginPageStyles = styled.header`
    max-width: 380px;
    margin: 6rem auto 0;

    h1 {
        font-size: 2.25rem;
    }
`

const LoginPage = (props) => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('james@home.com') /* array destructure */
    const [password, setPassword] = useState('123456')
    const [isValid, setIsValid] = useState(false)
        //console.log('render');
        //console.log(auth);

    /* 
        useState(init){
            let email = init
            const fn = (val)=>{
                email = val
            }
            return [email, fn]
        }
    
    */

    const handleClick = (e) =>{
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
            auth.isUser = true;
            setIsValid(true)
        })
        .catch(error=>{
            console.log(error.code);
            console.log(error.message);
        })
    }


    
    // conditional rendering
    if(isValid){
        return <Redirect to="/dashboard" />
    }else{
        return ( 
            <LoginPageStyles>
                <header><h1>Login Page</h1></header>
                <FormInput label="Enter an email" type="text" onChange={(e)=> setEmail(e.target.value.trim())} />
                <FormInput label="Password" type="password" onChange={(e)=> setPassword(e.target.value.trim())} />
                <Button label="login" uiStyle="login" onClick={handleClick} />
            </LoginPageStyles>
        );
        
    }
}
 
export default LoginPage;