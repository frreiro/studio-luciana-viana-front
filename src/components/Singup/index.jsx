import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index.jsx';

export default function Signup() {
    return (
        <>
            <Header />
            <LoginContainer>
                <LoginBanner>
                    <h1 className='title'>CADASTRO</h1>
                    <hr />
                    <div>
                        <input placeholder='Nome' type='text' />
                        <input placeholder='Nascimento' type='text' />
                    </div>
                    <div>
                        <input placeholder='Email' type='email' />
                        <input placeholder='Profissão' type='text' />
                    </div>
                    <div>
                        <input placeholder='Telefone' type='phone' />
                        <input placeholder='Endereço' type='text' />
                    </div>
                    <div>
                        <input placeholder='Senha' type='password' />
                        <input placeholder='Estilo de música' type='text' />
                    </div>
                    <button>ENTRAR</button>
                    <a>Já tenho conta</a>
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

    div{
        width: 1000px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    input{
        width: 379px;
        height: 56px;
        border-radius:10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 31px;
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
        margin-top: 50px;
    }
    
    a{
        margin-top:17px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 20px;
        color: var(--button-color);
    }
`;
