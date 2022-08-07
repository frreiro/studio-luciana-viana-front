import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { TokenContext } from '../../context/tokenContext.jsx';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from '../../schemas/formSchemas';
import { loginUser } from '../../services/authenticate.js';


export default function LoginForm() {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: joiResolver(loginSchema),
        criteriaMode: 'all',
    });

    const { setToken } = useContext(TokenContext);
    async function onSubmit(data) {
        const token = await loginUser(data);
        setToken(token);
        console.log(token);
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 379px;
        height: 56px;
        border-radius:10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 44px;
        font-family: var(--body-font);
        color: var(--third-color);
        font-size: 30px;
        font-weight: lighter;
        padding: 0 0 0 13px;

        ::placeholder{
            color: var(--third-color);
            opacity: 0.7;
            align-items: center;
        }
    }

    button{
        width:302px;
        height:51px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 25px;
        color: white;
        background-color: var(--button-color);
        border-radius: 5px;
        margin-top: 78px;
    }
    
    a{
        margin-top:96px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 20px;
        color: var(--button-color);
    }
`;
