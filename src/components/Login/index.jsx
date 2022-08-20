import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginForm from './form.jsx';
import LogoWithBackground from '../Logo/index.jsx';

export default function Login() {
    return (
        <>
            <Container>
                <Banner>
                    <LogoWithBackground />
                    <Title>
                        <h1 >LOGIN</h1>
                        <hr />
                    </Title>
                    <LoginForm />
                    <Link to={'/signup'}>Não tem conta? Que tal criar uma?</Link>
                </Banner>
            </Container>
        </>
    );
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    `;


export const Banner = styled.article`
    height: 409px;
    background-color: var(--second-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    position: relative;
  
    a{
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 10px;
        color: var(--button-color);
        margin-bottom: 40px;
        opacity: 0.7;

        
    }
`;

export const Title = styled.div`
    margin-top: 80px;
    font-family: var(--title-font);
    color: var(--third-color);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 40px 0 5px 0; */

    hr{
        width: 170px;
        height: 2px;
        background-color: var(--third-color);
    }

`;