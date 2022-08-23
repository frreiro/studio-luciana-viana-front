/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import HistoricForm from './form.jsx';
import HistoricUser from './historicUser.jsx';
import { useNavigate } from 'react-router';
import { Container, Title, Banner, CardInner, FlipCard } from '../../css/general.jsx';
import { TokenContext } from '../../context/tokenContext.jsx';
import { getHistoric } from '../../services/historic.js';
import LogoWithBackground from '../Logo/index.jsx';
import Footer from '../Footer/index.jsx';


export default function Historic() {

    const [historic, setHistoric] = useState({});
    const [enableForm, setEnableForm] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const { token } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(async () => {
        if (!token) navigate('/');

        const userHistoric = await getHistoric(token);
        if (userHistoric) return setHistoric(userHistoric);

    }, [enableForm]);

    return (
        <Container customStyle={'justify-content: normal; padding-top: 30px;'}>
            <LogoWithBackground />
            <FlipCard className={isFlipped ? 'show-back' : ''}>
                <CardInner>
                    <Banner className={isFlipped ? 'show-back' : ''}>
                        <Title>
                            <h1>HISTÓRICO</h1>
                            <hr />
                        </Title>
                        {!enableForm && Object.keys(historic).length > 1
                            ? <HistoricUser historic={historic} enableForm={setEnableForm} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
                            : enableForm ? <HistoricForm enableForm={setEnableForm} historic={historic} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
                                : <NotFound>
                                    <p className='not-found'>
                                        Nenhum histórico cadastrado
                                    </p>
                                    <button onClick={() => {
                                        setIsFlipped(isFlipped);
                                        setTimeout(() => setEnableForm(!enableForm), 100);
                                    }}>CADASTRAR</button>
                                </NotFound>
                        }
                    </Banner>
                </CardInner>
            </FlipCard>
            <Footer />
        </Container>
    );
}

export const NotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    text-align: center;
    /* justify-content: space-between; */
    button{
        width:145px;
        height:30px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 16px;
        color: white;
        background-color: var(--button-color);
        border-radius: 5px;
        margin-bottom: 5px;
    }
`;