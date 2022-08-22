import React from 'react';
import styled from 'styled-components';
import RadioForm from './radioForm.jsx';
import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import { getHistoric } from '../../services/historic.js';
import { useContext, useState } from 'react';
import { TokenContext } from '../../context/tokenContext.jsx';
import { UserContext } from '../../context/userContext.jsx';
import Calendly from './calendly.jsx';
import { getAssesment } from '../../services/assessment.js';
import { Banner, Container, Title } from '../Login/index.jsx';
import LogoWithBackground from '../Logo/index.jsx';
import Footer from '../Footer/index.jsx';
import { NotFound } from '../Historic/index.jsx';


export default function Booking() {

    const [sideView, setSideView] = useState(null);
    const [spots, setSpots] = useState({});
    const [openCalendly, setOpenCalendly] = useState(false);

    const navigate = useNavigate();
    const { user } = useContext(UserContext);
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
            setOpenCalendly(true);
        }
    }

    function closeCalendly() {
        setOpenCalendly(false);
        setSideView(null);
    }

    function notFoundFunction(type) {
        setTimeout(() => {
            setSideView(null);
        }, 1000);
        return (
            <NotFound>
                <p>
                    Nenhum {type} cadastrado
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
                        {sideView === 'noHistoric' ? notFoundFunction('histórico')
                            : sideView === 'noAssessmentText' ? notFoundFunction('avaliação')
                                : <>
                                    <Subtitle>
                                        <p className='subtitle'>Escolha o procedimento:</p>
                                    </Subtitle>
                                    <RadioForm onSubmit={onSubmit} />
                                </>
                        }
                    </Banner>
                    <Footer onClick={() => navigate('/menu')} />
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
