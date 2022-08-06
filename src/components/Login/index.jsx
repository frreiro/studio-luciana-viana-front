import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../Header/index.jsx';

export default function Login() {
    return (
        <>
            <Header />
            <LoginContainer>
                <LoginBanner>
                    <h1 className='title'>LOGIN</h1>
                    <hr />
                    <input placeholder='Email' type='email' />
                    <input placeholder='Senha' type='password' />
                    <button>ENTRAR</button>
                    <Link to={'/'}>Não tem conta? Que tal criar uma?</Link>
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
    width: 500px;
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

    input{
        width: 379px;
        height: 56px;
        border-radius:10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 44px;
        font-family: var(--body-font);
        color: var(--third-color);
        font-size: 30px;
        font-weight: lighter;
        padding: 0 0 0 13px;

        ::placeholder{
            color: var(--third-color);
            opacity: 0.7;
            align-items: center;
        }
    }

    button{
        width:302px;
        height:51px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 25px;
        color: white;
        background-color: var(--button-color);
        border-radius: 5px;
        margin-top: 78px;
    }
    
    a{
        margin-top:96px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 20px;
        color: var(--button-color);
    }
`;
