import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './form.jsx';
import { Container, Banner, Title } from '../Login/index.jsx';
import LogoWithBackground from '../Logo/index.jsx';

export default function Signup() {

    return (
        <>
            <Container>
                <Banner>
                    <LogoWithBackground />
                    <Title>
                        <h1 className='title'>CADASTRO</h1>
                        <hr />
                    </Title>
                    <SignupForm />
                    <Link to={'/'}>Já tenho conta</Link>
                </Banner>
            </Container>
        </>
    );
}
