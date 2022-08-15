import React, { useState } from 'react';
import styled from 'styled-components';

export default function AssessmentUser({ assessment, enableForm, Button }) {
    const [page, setPage] = useState(1);
    return (
        <>
            <UserAssessment >
                <div>
                    {page === 1 ?
                        <>
                            <div>
                                <Title>Tipo de pele :</Title>
                                <InputGroup>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.skinType === 'Oleosa' ? 'checked' : ''}`}></span>
                                        <p>OLEOSA</p>
                                    </RadioBox>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.skinType === 'Seca' ? 'checked' : ''}`}></span>
                                        <p>SECA</p>
                                    </RadioBox>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.skinType === 'Normal' ? 'checked' : ''}`}></span>
                                        <p>NORMAL</p>
                                    </RadioBox>
                                </InputGroup>
                            </div>
                            <Title>Manchas:</Title>
                            <Text >{assessment.spots ? assessment.spots : 'Nenhuma'}</Text>
                            <Title>Alteração na pele:</Title>
                            <Text>{assessment.skinChanges ? assessment.skinChanges : 'Nenhuma'}</Text>
                            <Title>Tratamento com ácido:</Title>
                            <Text>{assessment.acidTreatment ? assessment.acidTreatment : 'Nenhuma'}</Text>
                            <Title>Hidratação na pele: </Title>
                            <Text>{assessment.skinHidratation ? assessment.skinHidratation : 'Nenhum'}</Text>
                        </>
                        :
                        <>
                            <div>
                                <Title>É diabético:</Title>
                                <InputGroup>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.hasDiabetes ? '' : 'checked'}`}></span>
                                        <p>NÃO</p>
                                    </RadioBox>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.hasDiabetes ? 'checked' : ''}`}></span>
                                        <p>SIM</p>
                                    </RadioBox>
                                </InputGroup>
                            </div>
                            <div>
                                <Title>Já realizou algum tipo de depilação com cera: </Title>
                                <InputGroup>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.alreadyWax ? '' : 'checked'}`}></span>
                                        <p>NÃO</p>
                                    </RadioBox>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.alreadyWax ? 'checked' : ''}`}></span>
                                        <p>SIM</p>
                                    </RadioBox>
                                </InputGroup>
                            </div>

                            <div>
                                <Title>Método de epilação anterior:</Title>
                                <InputGroup>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.lastStyle === 'CERA_QUENTE' ? 'checked' : ''}`}></span>
                                        <p>CERTA QUENTE</p>
                                    </RadioBox>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.lastStyle === 'CERA_FRIA' ? 'checked' : ''}`}></span>
                                        <p>CERA FRIA</p>
                                    </RadioBox>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.lastStyle === 'LAMINA' ? 'checked' : ''}`}></span>
                                        <p>LÂMINA</p>
                                    </RadioBox>
                                    <RadioBox>
                                        <span className={`radio-custom ${assessment.lastStyle === 'LASER' ? 'checked' : ''}`}></span>
                                        <p>LASER</p>
                                    </RadioBox>
                                </InputGroup>
                            </div>
                        </>

                    }

                </div>
                <Button onClick={() => page === 1 ? setPage(2) : enableForm(true)}>{page === 1 ? 'PRÓXIMO' : 'EDITAR'}</Button>
            </UserAssessment>
        </>
    );
}

const UserAssessment = styled.div`
display: flex;
flex-direction: column;
`;

const RadioBox = styled.label`
position: relative;
display: flex;
justify-content: center;
padding-right: 48px;

    p{  
        margin-top:30px;
        font-size: 11px;
        text-align: center;
    }

    input{
        width: 22px;
        height: 23px;
        opacity: 0;
        cursor: pointer;
        position:absolute;
    }
     .radio-custom{
        width: 22px;
        height: 23px;
        background-color: #FFFF;
        border-radius: 30px;
        border: solid 2px #FFFF;
        position: absolute;
        top: 0;
    }

        .checked{
        background-color: var(--third-color);
        border-radius: 30px;
        border: solid 4px #FFFF;
    }
`;

const Text = styled.div`
    height: 41px;
    border-radius:10px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: var(--body-font);
    font-weight: lighter;
    color: var(--third-color);
    font-size: 20px;
    padding: 0px 0 0 13px;
    margin-bottom: 22px;
    display: flex;
    align-items: center;


`;

const InputGroup = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    
`;

const Title = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 12px;
`;

