import React, { useEffect } from 'react';
import styled from 'styled-components';
import RadioForm from './radioForm.jsx';
import { getHistoric } from '../../services/historic.js';
import { useContext, useState } from 'react';
import { TokenContext } from '../../context/tokenContext.jsx';
import { UserContext } from '../../context/userContext.jsx';
import Calendly from './calendly.jsx';
import { getAssesment } from '../../services/assessment.js';
import { Banner, Container, Title } from '../../css/general.jsx';
import LogoWithBackground from '../Logo/index.jsx';
import Footer from '../Footer/index.jsx';
import { NotFound } from '../Historic/index.jsx';
import { useNavigate } from 'react-router';


export default function Booking() {

    const [sideView, setSideView] = useState(null);
    const [spots, setSpots] = useState({});
    const [openCalendly, setOpenCalendly] = useState(false);

    const { user } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate('/');
    }, []);


    async function onSubmit(spotsChooses) {
        setSpots(spotsChooses);
        const userHasChoosen = checkIfUserHasChosen(spotsChooses);
        const historic = await getHistoric(token);
        const assessment = await getAssesment(token);
        if (!userHasChoosen) {
            setSideView('noChoices');
        }
        else if (!historic) {
            setSideView('noHistoric');
        }
        else if (!assessment) {
            setSideView('noAssessmentText');
        }
        else {
            setSideView('calendly');
            setOpenCalendly(true);
        }
    }

    function checkIfUserHasChosen(spotsChooses) {
        return Object.keys(spotsChooses).some((spots) => spotsChooses[spots] === true);
    }

    function closeCalendly() {
        setOpenCalendly(false);
        setSideView(null);
    }

    function notFoundFunction(message) {
        setTimeout(() => {
            setSideView(null);
        }, 3000);
        return (
            <NotFound>
                <p>
                    {message}
                </p>
            </NotFound>
        );
    }

    return (
        <Container colorInverted={true} customStyle={'justify-content: normal; padding-top: 30px;'}>
            <LogoWithBackground />
            {sideView === 'calendly'
                ? <Calendly user={user} spots={spots} setOpen={() => closeCalendly()} openCalendly={openCalendly} />
                : <>
                    <Banner>
                        <Title>
                            <h1 className='title'>AGENDAMENTO</h1>
                            <hr />
                        </Title>
                        {sideView === 'noHistoric' ? notFoundFunction('Nenhum histórico cadastrado')
                            : sideView === 'noAssessmentText' ? notFoundFunction('Nenhuma avaliação cadastrada')
                                : sideView === 'noChoices' ? notFoundFunction('Nenhum procedimento escolhido')
                                    : <>
                                        <Subtitle>
                                            <p className='subtitle'>Escolha o procedimento:</p>
                                        </Subtitle>
                                        <RadioForm onSubmit={onSubmit} />
                                    </>
                        }
                    </Banner>
                    <Footer />
                </>
            }
        </Container>
    );
}

const Subtitle = styled.div`
   p{
        font-size: 16px;
    }
`;
