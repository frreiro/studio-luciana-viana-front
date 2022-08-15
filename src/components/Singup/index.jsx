import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignupForm from './form.jsx';

export default function Signup() {

    return (
        <>
            <LoginContainer>
                <LoginBanner>
                    <h1 className='title'>CADASTRO</h1>
                    <hr />
                    <SignupForm />
                    <Link to={'/'}>Já tenho conta</Link>
                </LoginBanner>
            </LoginContainer>
        </>
    );
}

const LoginContainer = styled.div`
    width: 100vw;
    margin-top: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;


const LoginBanner = styled.article`
    width: 1000px;
    height: 710px;
    background-color: var(--second-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    .title{
        font-family: var(--title-font);
        color: var(--third-color);
        font-size: 30px;
        padding: 74px 0 5px 0;
    }

    hr{
        width: 170px;
        height: 2px;
        background-color: var(--third-color);
        margin-bottom: 64px;
    }

    a{  
        cursor: pointer;
        margin-top:17px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 20px;
        color: var(--button-color);
    }
`;
