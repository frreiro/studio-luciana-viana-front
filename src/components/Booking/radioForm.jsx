import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

export default function RadioForm({ onSubmit }) {
    const { register, handleSubmit } = useForm({
    });

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='checkbox-group1'>
                    <Checkbox >
                        <input type='checkbox'  {...register('buço')} />
                        <span className='checkbox-custom'></span>
                        <p>BUÇO</p>
                    </Checkbox>
                    <Checkbox >
                        <input type='checkbox'  {...register('rosto')} />
                        <span className='checkbox-custom'></span>
                        <p>ROSTO</p>
                    </Checkbox>
                    <Checkbox >
                        <input type='checkbox' {...register('axila')} />
                        <span className='checkbox-custom'></span>
                        <p>AXILA</p>
                    </Checkbox>
                    <Checkbox >
                        <input type='checkbox'  {...register('abdômen')} />
                        <span className='checkbox-custom'></span>
                        <p>ABDÔMEN</p>
                    </Checkbox>
                </div>
                <div className='checkbox-group2'>
                    <Checkbox >
                        <input type='checkbox' {...register('virilha-completa')} />
                        <span className='checkbox-custom'></span>
                        <p>VIRILHA<br />COMPLETA</p>
                    </Checkbox>
                    <Checkbox >
                        <input type='checkbox' {...register('perna-meia')} />
                        <span className='checkbox-custom'></span>
                        <p>MEIA<br />PERNA</p>
                    </Checkbox>
                    <Checkbox >
                        <input type='checkbox' {...register('perna-completa')} />
                        <span className='checkbox-custom'></span>
                        <p>PERNA<br />INTEIRA</p>
                    </Checkbox>
                </div>
                <button type='submit'>PRÓXIMO</button>
            </Form>
        </>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        width: 375px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .checkbox-group1{
        margin-top: 90px;
    }

    .checkbox-group2{
        margin-top: 38px;
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

`;

const Checkbox = styled.label`
    position: relative;
    display: flex;
    justify-content: center;

        p{  
            margin-top:30px;
            font-size: 17px;
            text-align: center;
        }

        input{
            width: 22px;
            height: 23px;
            opacity: 0;
            cursor: pointer;
            position:absolute;
        }
         .checkbox-custom{
            width: 22px;
            height: 23px;
            background-color: #FFFF;
            border-radius: 30px;
            border: solid 2px #FFFF;
            position: absolute;
            top: 0;
        }

         input:checked ~ .checkbox-custom{
            background-color: var(--third-color);
            border-radius: 30px;
            border: solid 4px #FFFF;
        }

`;