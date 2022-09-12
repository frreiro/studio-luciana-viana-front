import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { TokenContext } from '../../context/tokenContext.jsx';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { ErrorMessage } from '@hookform/error-message';
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from '../../schemas/formSchemas';
import { loginUser } from '../../services/authenticate.js';


export default function LoginForm() {
	const { register, formState: { errors }, handleSubmit } = useForm({
		resolver: joiResolver(loginSchema),
		criteriaMode: 'all',
	});

	const navigate = useNavigate();
	const { setToken } = useContext(TokenContext);
	async function onSubmit(data) {
		const token = await loginUser(data);
		localStorage.setItem('studio-token', token);
		setToken(token);
		navigate('/booking');
	}

	function handleError({ message }) {
		return <p className='error'>{message}</p>;
	}
	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<input placeholder='Email' type='email' {...register('email')} />
				<ErrorMessage name='email' errors={errors} render={handleError} />
				<input placeholder='Senha' type='password' {...register('password')} />
				<ErrorMessage name='password' errors={errors} render={handleError} />
				<button type='submit'>ENTRAR</button>
			</Form>
		</>
	);
}

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 22px 0 22px;
    /* position: relative; */
    
    input{
        width: 200px;
        height: 30px;
        border-radius:5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--body-font);
        color: var(--third-color);
        font-size: 16px;
        font-weight: lighter;
        padding: 0 0 0 7px;
        margin-top: 10px;
        
        ::placeholder{
            color: var(--third-color);
            opacity: 0.7;
            align-items: center;
        }
    }

    input:first-of-type{
        margin-top: 0px;
    }
    
    :nth-child(3){
        margin-bottom: 80px;
    }

    .error{
        margin-top: 1px;
    }
    
    button{
        width:145px;
        height:30px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 16px;
        color: white;
        background-color: var(--button-color);
        border-radius: 5px;
        position: absolute;
        bottom: 65px;
    }

    p{
        font-size: 10px;
        color: #ff4040 ;
    }
`;
