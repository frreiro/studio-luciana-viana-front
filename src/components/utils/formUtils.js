import RadioCouple from './radioCouple.jsx';
import RadioGroupInput from './radioGroup.jsx';
import RadioQuadriple from './radioQuadriple.jsx';
import RadioTriple from './radioTriple.jsx';
import styled from 'styled-components';


export { RadioCouple, RadioGroupInput, RadioQuadriple, RadioTriple, Form, Button };


const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    width:302px;
    height:51px;
    font-family: var(--body-font);
    font-weight: lighter;
    font-size: 25px;
    color: white;
    background-color: var(--button-color);
    border-radius: 5px;
    position: absolute;
    bottom:20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`;