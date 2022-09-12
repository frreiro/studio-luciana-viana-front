import React from 'react';
// import styled from 'styled-components';
import { RadioGroup, Title, InputGroup } from '../utils/radioGroup.jsx';
import { Checkbox } from '../Booking/radioForm.jsx';
import { HiddenDiv } from './radioCouple.jsx';




export default function RadioTriple({ register, name, title, value1, value2, value3 }) {

	return (
		<RadioGroup>
			<Title>{title}</Title>
			<InputGroup>
				<Checkbox >
					<input type='radio' value={value1} defaultChecked={true} {...register(`${name}`)} />
					<span className='checkbox-custom'></span>
					<p>{value1}</p>
				</Checkbox>
				<Checkbox >
					<input type='radio' value={value2} {...register(`${name}`)} />
					<span className='checkbox-custom'></span>
					<p>{value2}</p>
				</Checkbox>
				<Checkbox >
					<input type='radio' value={value3} {...register(`${name}`)} />
					<span className='checkbox-custom'></span>
					<p>{value3}</p>
				</Checkbox>
				<HiddenDiv customStyle='width: 80px' />
			</InputGroup>
		</RadioGroup>
	);
}


