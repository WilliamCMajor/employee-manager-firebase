import React from 'react';
import styled from 'styled-components';
import Button from '../components/buttons/Button';
import FormInput from '../components/forms/FormInput';


const RegisterPageStyles = styled.aside`
    width: 480px;
    margin: 6rem auto 0;
    header {
        text-align: center;
        margin-bottom: 3rem;
    }

    h2 {
        font-size: 2rem;
        font-weight: 700;
    }

    .create-account {
        margin-top: 2rem;
    }
`

const RegisterPage = (props) => {
    return ( 
        <RegisterPageStyles>
            <header>
                <h2>Unlimited Free Trial Sign Up</h2>
                <p>no credit card required</p>
            </header>
            <FormInput label="Name on the account" type="text" />
            <FormInput label="Valid email address" type="text" />
            <FormInput label="Password (min 6 characters)" type="text" />
            <Button className="create-account" uiStyle="signup" label="create a free account" />

        </RegisterPageStyles>
    );
}
 
export default RegisterPage;