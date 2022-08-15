import React from 'react';
import styled from 'styled-components';

export default function RadioTriple({ register, name, title, value1, value2, value3 }) {

    return (
        <>
            <Title>{title}</Title>
            <InputGroup>
                <RadioBox >
                    <input type='radio' value={value1} defaultChecked={true} {...register(`${name}`)} />
                    <span className='radio-custom'></span>
                    <p>{value1}</p>
                </RadioBox>
                <RadioBox >
                    <input type='radio' value={value2} {...register(`${name}`)} />
                    <span className='radio-custom'></span>
                    <p>{value2}</p>
                </RadioBox>
                <RadioBox >
                    <input type='radio' value={value3} {...register(`${name}`)} />
                    <span className='radio-custom'></span>
                    <p>{value3}</p>
                </RadioBox>
            </InputGroup>
        </>
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

const InputGroup = styled.div`
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 10px;
        
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
`;