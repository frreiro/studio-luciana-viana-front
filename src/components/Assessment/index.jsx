
import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../context/tokenContext.jsx';
import { getAssesment } from '../../services/assessment.js';
import AssessmentForm from './form.jsx';
import AssessmentUser from './assessmentUser.jsx';
import { Container, Title, Banner, CardInner, FlipCard } from '../../css/general.jsx';
import { NotFound } from '../Historic/index.jsx';
import LogoWithBackground from '../Logo/index.jsx';
import Footer from '../Footer/index.jsx';



export default function Assessment() {

    const [assessment, setAssessment] = useState({});
    const [enableForm, setEnableForm] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const { token } = useContext(TokenContext);


    useEffect(() => {
        (async () => {
            const userAssessment = await getAssesment(token);
            if (userAssessment) return setAssessment(userAssessment);

        })();
    }, [enableForm]);


    return (
        <Container customStyle={'justify-content: normal; padding-top: 30px;'}>
            <LogoWithBackground />
            <FlipCard className={isFlipped ? 'show-back' : ''}>
                <CardInner>
                    <Banner className={isFlipped ? 'show-back' : ''}>
                        <Title>
                            <h1>AVALIAÇÃO</h1>
                            <hr />
                        </Title>
                        {!enableForm && Object.keys(assessment).length > 1
                            ? <AssessmentUser assessment={assessment} enableForm={setEnableForm} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
                            : enableForm ? <AssessmentForm enableForm={setEnableForm} assessment={assessment} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
                                : <NotFound>
                                    <p className='not-found'>
                                        Nenhuma avaliação cadastrado
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

