import React, { useEffect, useContext } from 'react';
// import styled from 'styled-components';
import { TokenContext } from '../../context/tokenContext.jsx';
import { useNavigate } from 'react-router';
import { Container, Title } from '../../css/general.jsx';
import Header from '../Header/index.jsx';
import LogoWithBackground from '../Logo/index.jsx';


export default function Menu() {
    const navigate = useNavigate();

    const { token } = useContext(TokenContext);

    useEffect(() => {
        if (!token) navigate('/');

    }, []);

    return (
        <>
            <Header />
            <Container>
                <LogoWithBackground />
                <Title onClick={() => navigate('/booking')}>
                    <h1>AGENDAMENTO</h1>
                    <hr />
                </Title>
                <Title onClick={() => navigate('/assessment')}>
                    <h1>AVALIAÇÃO</h1>
                    <hr />
                </Title>
                <Title onClick={() => navigate('/historic')}>
                    <h1>HISTÓRICO</h1>
                    <hr />
                </Title>
            </Container>
        </>
    );
}