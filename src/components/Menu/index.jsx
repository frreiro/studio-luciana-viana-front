import React from 'react';
// import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Container, Title } from '../Login/index.jsx';
import LogoWithBackground from '../Logo/index.jsx';


export default function Menu() {
    const navigate = useNavigate();
    return (
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
    );
}