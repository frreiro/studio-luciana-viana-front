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



export const RadioGroup = styled.div`
	width: 100%;
    min-width: 243px;
    padding: 0 10px 0 10px;
    margin-bottom: 10px;
    ${Checkbox}{
        p{
            font-size: 8px;
        }
    }


	@media(min-width: 600px){
		padding: 0 20px 0 20px;


		${Checkbox}{
			margin-right: 20px;
			input,.checkbox-custom{
				width: 20px;
				height: 20px;
			}

			input:checked ~ .checkbox-custom{
            border: solid 3px #FFFF;
        }

			p{
				margin-top:24px;
				font-size: 10px;
			}
		}

	}


`;


export const InputGroup = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${props => props.customStyle}
`;


export const InputText = styled.input`
	width: 75%;
	min-width: 160px;
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

	@media(min-width: 600px){
		height: 30px;
		margin-bottom: 0;
		font-size: 14px;


	}

`;


export const Title = styled.p`
    font-size: 10px;
    font-family: var(--body-font);
    font-weight: 700;

	@media(min-width: 600px){
		font-size: 13px;
		margin-bottom: 5px;

	}
`;