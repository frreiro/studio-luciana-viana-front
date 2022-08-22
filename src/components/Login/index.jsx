import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './form.jsx';
import LogoWithBackground from '../Logo/index.jsx';
import { Container, Banner, Title } from '../../css/general.jsx';


export default function Login() {
    return (
        <>
            <Container>
                <Banner>
                    <LogoWithBackground inBanner={true} />
                    <Title marginTop={80}>
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

