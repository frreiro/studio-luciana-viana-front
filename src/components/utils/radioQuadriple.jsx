import React from 'react';
import { RadioGroup, Title, InputGroup } from '../utils/radioGroup.jsx';
import { Checkbox } from '../Booking/radioForm.jsx';

export default function RadioQuadriple({ register, name, title, value1, value2, value3, value4, ...props }) {

	return (
		<RadioGroup>
			<Title>{title}</Title>
			<InputGroup>
				<Checkbox>
					<input type='radio' value={props.nameValue1} defaultChecked={true} {...register(`${name}`)} />
					<span className='checkbox-custom'></span>
					<p>{value1}</p>
				</Checkbox>
				<Checkbox >
					<input type='radio' value={props.nameValue2}  {...register(`${name}`)} />
					<span className='checkbox-custom'></span>
					<p>{value2}</p>
				</Checkbox>
				<Checkbox >
					<input type='radio' value={props.nameValue3} {...register(`${name}`)} />
					<span className='checkbox-custom'></span>
					<p>{value3}</p>
				</Checkbox>
				<Checkbox >
					<input type='radio' value={props.nameValue4} {...register(`${name}`)} />
					<span className='checkbox-custom'></span>
					<p>{value4}</p>
				</Checkbox>
			</InputGroup>
		</RadioGroup>
	);
}
