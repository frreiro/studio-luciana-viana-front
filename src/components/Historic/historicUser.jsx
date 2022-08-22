import React from 'react';
import styled from 'styled-components';
// import { Button } from '../utils/formUtils.js';
import { InputGroup, RadioGroup, Title } from '../utils/radioGroup.jsx';
import { Checkbox } from '../Booking/radioForm.jsx';
import { HiddenDiv } from '../utils/radioCouple.jsx';


export default function HistoricUser({ historic, enableForm, setIsFlipped, isFlipped }) {

    function edit() {
        setIsFlipped(!isFlipped);
        setTimeout(() => enableForm(true), 100);
    }

    return (
        <>
            <UserHistoric >
                <div>
                    <Title>Alergias:</Title>
                    <Text >{historic.alergies ? historic.alergies : 'Nenhuma'}</Text>
                </div>
                <div>
                    <Title>Histórico de alergias na família:</Title>
                    <Text>{historic.familyAlergies ? historic.familyAlergies : 'Nenhuma'}</Text>
                </div>
                <div>
                    <Title>Já teve alguma doença de pele:</Title>
                    <Text>{historic.skinDeseases ? historic.skinDeseases : 'Nenhuma'}</Text>
                </div>
                <div>
                    <Title>Cosmédicos e medicamentos em uso?</Title>
                    <Text>{historic.medicines ? historic.medicines : 'Nenhum'}</Text>
                </div>
                <RadioGroup>
                    <Title>Gravidez</Title>
                    <InputGroup>
                        <Checkbox>
                            <span className={`checkbox-custom ${historic.pregnancy ? '' : 'checked'}`}></span>
                            <p>NÃO</p>
                        </Checkbox>
                        <Checkbox>
                            <span className={`checkbox-custom ${historic.pregnancy ? 'checked' : ''}`}></span>
                            <p>SIM</p>
                        </Checkbox>
                        <HiddenDiv />
                    </InputGroup>
                </RadioGroup>
                <button onClick={edit}>EDITAR</button>
            </UserHistoric>
        </>
    );
}
const UserHistoric = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* padding: 0 20px 0 20px; */


    button{
        width:145px;
        height:30px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 16px;
        color: white;
        background-color: var(--button-color);
        margin-top: 40px;
        border-radius: 5px;
    }


    ${Checkbox}{
        .checked{
            background-color: var(--third-color);
            border-radius: 30px;
            border: solid 2px #FFFF;
     }
    }
`;

// const RadioBox = styled.label`
// position: relative;
// display: flex;
// justify-content: center;
// padding-right: 48px;

//     p{  
//         margin-top:30px;
//         font-size: 11px;
//         text-align: center;
//     }

//     input{
//         width: 22px;
//         height: 23px;
//         opacity: 0;
//         cursor: pointer;
//         position:absolute;
//     }
//      .radio-custom{
//         width: 22px;
//         height: 23px;
//         background-color: #FFFF;
//         border-radius: 30px;
//         border: solid 2px #FFFF;
//         position: absolute;
//         top: 0;
//     }

//         .checked{
//         background-color: var(--third-color);
//         border-radius: 30px;
//         border: solid 4px #FFFF;
//     }
// `;

export const Text = styled.div`
    width: 220px;
    height: 20px;
    border-radius:5px;
    background-color: white;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    font-family: var(--body-font);
    font-weight: lighter;
    color: var(--third-color);
    font-size: 10px;
    padding: 0px 0 0 13px;
    margin-bottom: 11px;
    display: flex;
    align-items: center;

`;

// const InputGroup = styled.div`
//     display: flex;
//     justify-content: left;
//     align-items: center;

// `;

// const Title = styled.p`
// font-size: 20px;
// font-weight: 700;
// margin-bottom: 12px;
// `;

