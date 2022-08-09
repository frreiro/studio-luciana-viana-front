
import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/index.jsx';
import HistoricForm from './form.jsx';
import HistoricUser from './historicUser.jsx';
import { TokenContext } from '../../context/tokenContext.jsx';
import { getHistoric } from '../../services/historic.js';


export default function Historic() {

    const [historic, setHistoric] = useState({});
    const [enableForm, setEnableForm] = useState(false);

    const { token } = useContext(TokenContext);
    useEffect(async () => {
        const userHistoric = await getHistoric(token);
        if (userHistoric) return setHistoric(userHistoric);

    }, [enableForm]);



    return (
        <>
            <Header />
            <MainTag>
                <HistoricBanner>
                    <h1 className='title'>HISTÓRICO</h1>
                    <hr />
                    {!enableForm && Object.keys(historic).length > 1
                        ? <HistoricUser historic={historic} enableForm={setEnableForm} />
                        : enableForm ? <HistoricForm enableForm={setEnableForm} historic={historic} />
                            : <>
                                <p className='not-found'>
                                    Nenhum histórico cadastrado
                                </p>
                                <Button onClick={() => setEnableForm(!enableForm)}>CADASTRAR</Button>
                            </>
                    }
                </HistoricBanner>
                <MissContent>
                    <p className='side-text'>
                        OLÁ, FULANA.<br />
                        NESTA TELA VOCÊ PODERÁ <br />
                        CONSULTAR SUAS INFORMAÇÕES <br />
                        SOBRE O SEU HISTÓRICO <br />
                    </p>
                    <p className='side-text'>
                        AQUI VOCÊ ENCONTRA DADOS<br />
                        QUE VOCÊ MESMA NOS INFORMOU <br />
                        SOBRE SUAS ALERGIAS, <br />
                        DOENÇAS DE PELE, ETC
                        <br />
                    </p>
                    <p className='side-text'>
                        SINTA-SE LIVRE PARA ALTERAR<br />
                        OU REMOVER ALGUMA <br />
                        INFORMAÇÃO <br />
                    </p>
                </MissContent>
            </MainTag>
        </>
    );
}


const MainTag = styled.div`
    width: 100vw;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    padding: 108px 47px 0 47px;
    position: relative;



    p{
        font-family: var(--body-font);
        color: var(--third-color);
    }


    .not-found{
        padding: 70px;
    }

    .side-text{

        font-family: var(--title-font);
        font-size: 25px;
        text-align: center;
        line-height: 40px;
    }
    `;


const HistoricBanner = styled.article`
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
        width: 230px;
        height: 2px;
        background-color: var(--third-color);
        margin-bottom: 12px;
    }


    .subtitle{
        font-size: 30px;
    }
`;

const MissContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-bottom: 42px;
    }
`;

const Button = styled.button`
    width:302px;
    height:51px;
    font-family: var(--body-font);
    font-weight: lighter;
    font-size: 25px;
    color: white;
    background-color: var(--button-color);
    border-radius: 5px;
    margin-top: 300px;
`;