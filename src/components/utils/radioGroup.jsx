import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../Booking/radioForm.jsx';

export default function RadioGroupInput({ watch, setValue, register, name, placeholder, title }) {

    function parseInputValue(booleanInputName, inputName) {
        const watchInput = JSON.parse(watch(booleanInputName, false));
        if (!watchInput) setValue(inputName, null);
        return watchInput;
    }

    return (
        <RadioGroup>
            <Title>{title}</Title>
            <InputGroup>
                <Checkbox >
                    <input type='radio' value={false} defaultChecked={true} {...register(`${name.concat('Boolean')}`)} />
                    <span className='checkbox-custom'></span>
                    <p>NÃO</p>
                </Checkbox>
                <Checkbox >
                    <input type='radio' value={true} {...register(`${name.concat('Boolean')}`)} />
                    <span className='checkbox-custom'></span>
                    <p>SIM</p>
                </Checkbox>
                <InputText placeholder={placeholder} disabled={!parseInputValue(name.concat('Boolean'), name)} type='text' {...register(`${name}`)} />
            </InputGroup>
        </RadioGroup>
    );
}


// const RadioBox = styled.label`
//     position: relative;
//     display: flex;
//     justify-content: center;
//     /* padding-right: 48px; */

//         p{  
//             margin-top:20px;
//             font-size: 10px;
//             text-align: center;
//         }

//         input{
//             width: 12px;
//             height: 12px;
//             opacity: 0;
//             cursor: pointer;
//             position:absolute;
//         }
//          .checkbox-custom{
//             width: 12px;
//             height: 12px;
//             background-color: #FFFF;
//             border-radius: 30px;
//             border: solid 2px #FFFF;
//             position: absolute;
//             top: 0;
//         }

//          input:checked ~ .checkbox-custom{
//             background-color: var(--third-color);
//             border-radius: 30px;
//             border: solid 2px #FFFF;
//         }

// `;

export const RadioGroup = styled.div`
    width: 243px;
    padding: 0 10px 0 10px;
    margin-bottom: 10px;
    ${Checkbox}{
        p{
            font-size: 8px;
        }
    }

`;


export const InputGroup = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${props => props.customStyle}
        /* background-color: red; */
`;


export const InputText = styled.input`
        width: 160px;
        height: 20px;
        border-radius:5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: var(--body-font);
        font-weight: lighter;
        color: var(--third-color);
        font-size: 10px;
        padding: 0 0 0 7px;
        margin-bottom: 22px;

        ::placeholder{
            color: var(--third-color);
            opacity: 0.7;
            align-items: center;
        }

`;


export const Title = styled.p`
    font-size: 10px;
    font-family: var(--body-font);
    font-weight: 700;
    /* margin-bottom: 12px; */
`;