import React from 'react';
import styled from 'styled-components';

export default function RadioGroupInput({ watch, setValue, register, name, placeholder, title }) {

    function parseInputValue(booleanInputName, inputName) {
        const watchInput = JSON.parse(watch(booleanInputName, false));
        if (!watchInput) setValue(inputName, null);
        return watchInput;
    }

    return (
        <div className='form-group'>
            <Title>{title}</Title>
            <InputGroup>
                <RadioBox >
                    <input type='radio' value={false} defaultChecked={true} {...register(`${name.concat('Boolean')}`)} />
                    <span className='radio-custom'></span>
                    <p>NÃO</p>
                </RadioBox>
                <RadioBox >
                    <input type='radio' value={true} {...register(`${name.concat('Boolean')}`)} />
                    <span className='radio-custom'></span>
                    <p>SIM</p>
                </RadioBox>
                <InputText placeholder={placeholder} disabled={!parseInputValue(name.concat('Boolean'), name)} type='text' {...register(`${name}`)} />
            </InputGroup>
        </div>
    );
}


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

         input:checked ~ .radio-custom{
            background-color: var(--third-color);
            border-radius: 30px;
            border: solid 4px #FFFF;
        }
`;

const InputText = styled.input`
        width: 291px;
        height: 41px;
        border-radius:10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: var(--body-font);
        font-weight: lighter;
        color: var(--third-color);
        font-size: 20px;
        padding: 0 0 0 13px;
        margin-bottom: 22px;

        ::placeholder{
            color: var(--third-color);
            opacity: 0.7;
            align-items: center;
        }

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