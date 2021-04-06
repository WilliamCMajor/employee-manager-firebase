import React from 'react';
import styled from 'styled-components';
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
    return ( 
        <LoginPageStyles>
            <header><h1>Login Page</h1></header>
            <FormInput label="Enter an email" type="text" />
            <FormInput label="Password" type="password" />
            <Button label="login" uiStyle="login" />
        </LoginPageStyles>
    );
}
 
export default LoginPage;