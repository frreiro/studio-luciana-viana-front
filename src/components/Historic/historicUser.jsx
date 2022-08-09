import React from 'react';
import styled from 'styled-components';

export default function HistoricUser({ historic, enableForm }) {

    return (
        <>
            <UserHistoric >
                <div>
                    <Title>Alergias:</Title>
                    <Text >{historic.alergies ? historic.alergies : 'Nenhuma'}</Text>
                    <Title>Histórico de alergias na família:</Title>
                    <Text>{historic.familyAlergies ? historic.familyAlergies : 'Nenhuma'}</Text>
                    <Title>Já teve alguma doença de pele:</Title>
                    <Text>{historic.skinDeseases ? historic.skinDeseases : 'Nenhuma'}</Text>
                    <Title>Cosmédicos e medicamentos em uso?</Title>
                    <Text>{historic.medicines ? historic.medicines : 'Nenhum'}</Text>
                    <div>
                        <Title>Gravidez</Title>
                        <InputGroup>
                            <RadioBox>
                                <span className={`radio-custom ${historic.pregnancy ? '' : 'checked'}`}></span>
                                <p>NÃO</p>
                            </RadioBox>
                            <RadioBox>
                                <span className={`radio-custom ${historic.pregnancy ? 'checked' : ''}`}></span>
                                <p>SIM</p>
                            </RadioBox>
                        </InputGroup>
                    </div>
                </div>
                <button onClick={() => enableForm(true)}>EDITAR</button>
            </UserHistoric>
        </>
    );
}

const UserHistoric = styled.div`
display: flex;
flex-direction: column;
align-items: center;

button{
    width:302px;
    height:51px;
    font-family: var(--body-font);
    font-weight: lighter;
    font-size: 25px;
    color: white;
    background-color: var(--button-color);
    border-radius: 5px;
    margin-top: 45px;
}

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

