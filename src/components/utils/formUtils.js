import RadioCouple from './radioCouple.jsx';
import RadioGroupInput from './radioGroup.jsx';
import RadioQuadriple from './radioQuadriple.jsx';
import RadioTriple from './radioTriple.jsx';
import styled from 'styled-components';


export { RadioCouple, RadioGroupInput, RadioQuadriple, RadioTriple, Form, Button };


const Form = styled.form`
	width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width:145px;
        height:30px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 16px;
        color: white;
        background-color: var(--button-color);
        border-radius: 5px;
        margin-bottom: 5px;
    }

	
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