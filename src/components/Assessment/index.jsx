
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/index.jsx';
import { TokenContext } from '../../context/tokenContext.jsx';
import { UserContext } from '../../context/userContext.jsx';
import { getAssesment } from '../../services/assessment.js';
import { Button } from '../utils/formUtils.js';
import AssessmentForm from './form.jsx';
import AssessmentUser from './assessmentUser.jsx';


export default function Assessment() {

    const [assessment, setAssessment] = useState({});
    const [enableForm, setEnableForm] = useState(false);

    const { token } = useContext(TokenContext);
    const { user } = useContext(UserContext);


    useEffect(() => {
        (async () => {
            const userAssessment = await getAssesment(token);
            if (userAssessment) return setAssessment(userAssessment);
            console.log(userAssessment);

        })();
    }, [enableForm]);


    return (
        <>
            <Header />
            <MainTag>
                <AssessmentBanner>
                    <BannerTitle>
                        <h1>AVALIAÇÃO</h1>
                        <hr />
                    </BannerTitle>
                    {!enableForm && Object.keys(assessment).length > 1
                        ? <AssessmentUser assessment={assessment} enableForm={setEnableForm} Button={Button} />
                        : enableForm ? <AssessmentForm enableForm={setEnableForm} assessment={assessment} Button={Button} />
                            : <NotFound>
                                <p className='not-found'>
                                    Nenhum histórico cadastrado
                                </p>
                                <Button onClick={() => setEnableForm(!enableForm)}>CADASTRAR</Button>
                            </NotFound>
                    }
                </AssessmentBanner>
                <MissContent>
                    <p className='side-text'>
                        OLÁ, {user?.name.split(' ')[0].toUpperCase()}<br />
                        NESTA TELA VOCÊ PODERÁ <br />
                        CONSULTAR SUAS INFORMAÇÕES <br />
                        SOBRE O SEU AVALIAÇÃO <br />
                    </p>
                    <p className='side-text'>


                        AQUI VOCÊ ENCONTRA DADOS<br />
                        QUE VOCÊ MESMA NOS INFORMOU <br />
                        SOBRE A SENSIBILIDADE<br />
                        DA SUA PELE, COMO MANCHAS,<br />
                        TIPO DE PELE, FERIDAS, ETC
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
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    padding: 108px 47px 0 47px;
    position: relative;
    


    p{
        font-family: var(--body-font);
        color: var(--third-color);
    }


    .side-text{

        font-family: var(--title-font);
        font-size: 25px;
        text-align: center;
        line-height: 40px;
    }
    `;


const AssessmentBanner = styled.article`
    width: 500px;
    height: 710px;
    background-color: var(--second-color);
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    position: relative;
    padding: 100px 20px 0 20px;
`;

const MissContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-bottom: 42px;
    }
`;
const BannerTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 40px;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
    
    h1{
        font-family: var(--title-font);
        color: var(--third-color);
        font-size: 30px;
    }

    hr{
        width: 230px;
        height: 2px;
        background-color: var(--third-color);
        margin-bottom: 12px;
    }


`;

const NotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;