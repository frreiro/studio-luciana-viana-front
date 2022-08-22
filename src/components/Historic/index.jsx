
import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import HistoricForm from './form.jsx';
import HistoricUser from './historicUser.jsx';
import { Container, Title, Banner } from '../Login/index.jsx';
import { TokenContext } from '../../context/tokenContext.jsx';
import { getHistoric } from '../../services/historic.js';
import LogoWithBackground from '../Logo/index.jsx';
import Footer from '../Footer/index.jsx';


export default function Historic() {

    const [historic, setHistoric] = useState({});
    const [enableForm, setEnableForm] = useState(false);

    const { token } = useContext(TokenContext);

    useEffect(async () => {
        const userHistoric = await getHistoric(token);
        if (userHistoric) return setHistoric(userHistoric);

    }, [enableForm]);



    return (
        <Container customStyle={'justify-content: normal; padding-top: 30px;'}>
            <LogoWithBackground />
            <Banner>
                <Title>
                    <h1>HISTÓRICO</h1>
                    <hr />
                </Title>
                {!enableForm && Object.keys(historic).length > 1
                    ? <HistoricUser historic={historic} enableForm={setEnableForm} />
                    : enableForm ? <HistoricForm enableForm={setEnableForm} historic={historic} />
                        : <NotFound>
                            <p className='not-found'>
                                Nenhum histórico cadastrado
                            </p>
                            <button onClick={() => setEnableForm(!enableForm)}>CADASTRAR</button>
                        </NotFound>
                }
            </Banner>
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