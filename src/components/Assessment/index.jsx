
import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../context/tokenContext.jsx';
import { getAssesment } from '../../services/assessment.js';
import { Button } from '../utils/formUtils.js';
import AssessmentForm from './form.jsx';
import AssessmentUser from './assessmentUser.jsx';
import { Container, Title, Banner } from '../Login/index.jsx';
import { NotFound } from '../Historic/index.jsx';
import LogoWithBackground from '../Logo/index.jsx';
import Footer from '../Footer/index.jsx';



export default function Assessment() {

    const [assessment, setAssessment] = useState({});
    const [enableForm, setEnableForm] = useState(false);

    const { token } = useContext(TokenContext);
    // const { user } = useContext(UserContext);


    useEffect(() => {
        (async () => {
            const userAssessment = await getAssesment(token);
            if (userAssessment) return setAssessment(userAssessment);
            console.log(userAssessment);

        })();
    }, [enableForm]);


    return (
        <Container customStyle={'justify-content: normal; padding-top: 30px;'}>
            <LogoWithBackground />
            <Banner>
                <Title>
                    <h1>AVALIAÇÃO</h1>
                    <hr />
                </Title>
                {!enableForm && Object.keys(assessment).length > 1
                    ? <AssessmentUser assessment={assessment} enableForm={setEnableForm} Button={Button} />
                    : enableForm ? <AssessmentForm enableForm={setEnableForm} assessment={assessment} Button={Button} />
                        : <NotFound>
                            <p className='not-found'>
                                Nenhuma avaliação cadastrado
                            </p>
                            <button onClick={() => setEnableForm(!enableForm)}>CADASTRAR</button>
                        </NotFound>
                }
            </Banner>
            <Footer />
        </Container>
    );
}

