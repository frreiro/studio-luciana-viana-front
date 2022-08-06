import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { joiResolver } from '@hookform/resolvers/joi';
import { signupSchema } from '../../schemas/formSchemas';
import { createUser } from '../../services/authenticate.js';

export default function SignupForm() {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: joiResolver(signupSchema),
        criteriaMode: 'all',
    });
    const navigate = useNavigate();
    async function onSubmit(data) {
        const res = await createUser(data);
        console.log(res);
        if (res === 'Created') navigate('/login');
    }

    function handleError({ message }) {
        return <p className='error'>{message}</p>;
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className='form-group'>
                    <input placeholder='Nome' type='text' {...register('name')} />
                    <ErrorMessage name='name' errors={errors} render={handleError} />
                    <input placeholder='Email' type='email' {...register('email')} />
                    <ErrorMessage name='email' errors={errors} render={handleError} />
                    <input placeholder='Telefone' type='phone' {...register('phone')} />
                    <ErrorMessage name='phone' errors={errors} render={handleError} />
                    <input placeholder='Senha' type='password' {...register('password')} />
                    <ErrorMessage name='password' errors={errors} render={handleError} />
                </div>
                <div className='form-group'>
                    <input placeholder='Nascimento' type='text' {...register('birthday')} />
                    <ErrorMessage name='birthday' errors={errors} render={handleError} />
                    <input placeholder='Profissão' type='text' {...register('occupation')} />
                    <ErrorMessage name='occupation' errors={errors} render={handleError} />
                    <input placeholder='Endereço' type='text' {...register('address')} />
                    <ErrorMessage name='adress' errors={errors} render={handleError} />
                    <input placeholder='Estilo de música' type='text' {...register('musicStyle')} />
                    <ErrorMessage name='musicStyle' errors={errors} render={handleError} />
                </div>
            </div>
            <button type='submit'>ENTRAR</button>
        </Form>
    );
}


const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        width: 1000px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .form-group{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }
    }

    input{
        width: 379px;
        height: 56px;
        border-radius:10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 31px;
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
        margin-top: 50px;
    }

    `;
