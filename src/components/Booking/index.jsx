import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index.jsx';
import RadioForm from './radioForm.jsx';
import { Link } from 'react-router-dom';
import { getHistoric } from '../../services/historic.js';
import { useContext, useState } from 'react';
import { TokenContext } from '../../context/tokenContext.jsx';
import { UserContext } from '../../context/userContext.jsx';
import Calendly from './calendly.jsx';
import { getAssesment } from '../../services/assessment.js';


export default function Booking() {
    const { user } = useContext(UserContext);
    const [sideView, setSideView] = useState(null);
    const [spots, setSpots] = useState({});

    const { token } = useContext(TokenContext);
    async function onSubmit(spotsChooses) {
        setSpots(spotsChooses);
        const historic = await getHistoric(token);
        const assessment = await getAssesment(token);
        if (!historic) {
            setSideView('noHistoric');
        }
        else if (!assessment) {
            setSideView('noAssessmentText');
        }
        else {
            setSideView('calendly');
        }
    }


    console.log(spots);
    const calendly = <Calendly user={user} spots={spots} />;
    const noHistoricText = <MissContent>
        <p className='side-text'>
            INFELIZMENTE VOCÊ NÃO TEM <br />
            UM HISTÓRICO ATUALIZADO, <br />
            PARA REALIZAR UM AGENDAMENTO <br />
            É NECESSÁRIO TER UM HISTÓRICO <br />
            CADASTRADO
        </p>
        <Link to='/historic'>Cique aqui para cadastrar seu histórico</Link>
    </MissContent>;
    const defaultMessage = <p className='side-text'>
        SELECIONE O LUGAR
        <br />  O QUAL DESEJE QUE SEJA <br />
        APLICADO A EPILAÇÃO</p>;
    const noAssessmentText =
        <MissContent>
            <p className='side-text'>INFELIZMENTE VOCÊ NÃO TEM <br />
                UMA AVALIAÇÃO ATUALIZADO, <br /> PARA REALIZAR UM AGENDAMENTO <br />
                É NECESSÁRIO TER UMA AVALIAÇÃO <br />
                CADASTRADA</p>
            <Link to='/assessment'>Cique aqui para cadastrar sua avaliação</Link>

        </MissContent>;

    return (
        <>
            <Header />
            <MainTag>
                <AppointmentBanner>
                    <h1 className='title'>AGENDAMENTO</h1>
                    <hr />
                    <p className='subtitle'>Escolha o procedimento:</p>
                    <RadioForm onSubmit={onSubmit} />
                </AppointmentBanner>
                {sideView ?
                    sideView === 'calendly' ? calendly :
                        sideView === 'noHistoric' ? noHistoricText :
                            sideView === 'noAssessmentText' ? noAssessmentText : defaultMessage
                    :
                    defaultMessage

                }
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



    p, a{
        font-family: var(--body-font);
        color: var(--third-color);
        font-weight: 300;
    }

    .side-text{

        font-family: var(--title-font);
        font-size: 25px;
        text-align: center;
        line-height: 40px;
    }
    `;


const AppointmentBanner = styled.article`
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
        margin-bottom: 89px;
    }


    .subtitle{
        font-size: 30px;
    }
`;

const MissContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

