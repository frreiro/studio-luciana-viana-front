import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../Booking/radioForm.jsx';
import { RadioGroup, Title, InputGroup } from '../utils/radioGroup.jsx';

export default function RadioCouple({ register, name, title }) {

    return (
        <RadioGroup >
            <Title>{title}</Title>
            <InputGroup>
                <Checkbox>
                    <input type='radio' value={false} defaultChecked={true} {...register(`${name}`)} />
                    <span className='checkbox-custom'></span>
                    <p>NÃO</p>
                </Checkbox>
                <Checkbox >
                    <input type='radio' value={true} {...register(`${name}`)} />
                    <span className='checkbox-custom'></span>
                    <p>SIM</p>
                </Checkbox>
                <HiddenDiv />
            </InputGroup>
        </RadioGroup>
    );
}


export const HiddenDiv = styled.div`
    width: 160px;
    visibility: hidden;
    ${props => props.customStyle}
`;
