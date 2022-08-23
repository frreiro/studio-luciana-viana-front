import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
// import { joiResolver } from '@hookform/resolvers/joi';
import { signupFirstSchema, signupSecondSchema } from '../../schemas/formSchemas';
import { createUser } from '../../services/authenticate.js';
import { Form } from '../Login/form.jsx';
import InputMask from 'react-input-mask';


export default function SignupForm() {
    const [page, setPage] = useState(1);
    const signUpInfo = useRef({});
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        resolver: async data => {
            if (page === 1) {
                data.phone = data.phone.replace('(', '').replace(')', '').replace(' ', '');
            } else {
                data.birthday = data.birthday.replaceAll('/', '');
            }

            const { error, value: values } = page === 1
                ? signupFirstSchema.validate(data, { abortEarly: false, })
                : signupSecondSchema.validate(data, { abortEarly: false, });

            return {
                values: error ? {} : values,
                errors: error
                    ? error.details.reduce((previous, currentError) => {
                        return {
                            ...previous,
                            [currentError.path[0]]: currentError,
                        };
                    }, {})
                    : {},
            };

            // return joiResolver(page === 1 ? signupFirstSchema : signupSecondSchema);
        },

        criteriaMode: 'all',
    });


    const navigate = useNavigate();

    async function onSubmit(data) {
        setPage(page + 1);
        signUpInfo.current = { ...signUpInfo.current, ...data };

        if (page !== 1) {
            const res = await createUser(signUpInfo.current);
            if (res === 'Created') navigate('/');
        }
        reset();
    }

    function handleError({ message }) {
        return <p className='error'>{message}</p>;
    }



    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {page === 1 ?
                    <div className='form-group'>
                        <input placeholder='Nome' type='text' {...register('name')} />
                        <ErrorMessage name='name' errors={errors} render={handleError} />
                        <input placeholder='Email' type='email' {...register('email')} />
                        <ErrorMessage name='email' errors={errors} render={handleError} />
                        <InputMask mask={'(99) 999999999'} maskChar={null} placeholder='Telefone' type='phone' {...register('phone')} />
                        <ErrorMessage name='phone' errors={errors} render={handleError} />
                        <input placeholder='Senha' type='password' {...register('password')} />
                        <ErrorMessage name='password' errors={errors} render={handleError} />
                    </div>
                    :
                    <div className='form-group'>
                        <InputMask mask={'99/99/9999'} maskChar={null} placeholder='Nascimento' type='text' {...register('birthday')} />
                        <ErrorMessage name='birthday' errors={errors} render={handleError} />
                        <input placeholder='Profissão' type='text' {...register('occupation')} />
                        <ErrorMessage name='occupation' errors={errors} render={handleError} />
                        <input placeholder='Endereço' type='text' {...register('address')} />
                        <ErrorMessage name='address' errors={errors} render={handleError} />
                        <input placeholder='Estilo de música' type='text' {...register('musicStyle')} />
                        <ErrorMessage name='musicStyle' errors={errors} render={handleError} />
                    </div>
                }
            </div>
            <button type='submit'>{page === 1 ? <ion-icon name="arrow-forward-outline"></ion-icon> : 'CADASTRAR'}</button>
        </Form>
    );
}

