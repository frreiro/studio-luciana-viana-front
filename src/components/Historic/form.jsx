import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { TokenContext } from '../../context/tokenContext.jsx';
import { updateHistoric } from '../../services/historic.js';
import { createHistoric } from '../../services/historic.js';


export default function HistoricForm({ enableForm, historic }) {
    const { register, handleSubmit, watch, setValue } = useForm({
    });
    const isEdditing = Object.keys(historic).length > 1 ? true : false;

    useEffect(() => {
        if (isEdditing) {
            for (const prop in historic) {
                if (historic[prop] === null) setValue(prop.substring(0, prop.length - 1), 'false');
                if (historic[prop] !== null && prop !== 'pregnancy' && prop !== 'id') setValue(prop.substring(0, prop.length - 1), 'true');
                if (prop === 'pregnancy') return setValue(prop, `${historic[prop]}`);
                setValue(prop, historic[prop]);
            }
        }

    }, []);

    function parseInputValue(booleanInputName, inputName) {
        const watchInput = JSON.parse(watch(booleanInputName, false));
        if (!watchInput) setValue(inputName, null);
        return watchInput;
    }

    const { token } = useContext(TokenContext);
    async function onSubmit(data) {
        delete data.alergie;
        delete data.familyAlergie;
        delete data.medicine;
        delete data.skinDesease;
        delete data?.id;
        if (isEdditing) {
            await updateHistoric({ ...data, pregnancy: JSON.parse(data.pregnancy) }, token, historic.id);
        }
        else await createHistoric({ ...data, pregnancy: JSON.parse(data.pregnancy) }, token);

        enableForm(false);
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <Title>Alergias:</Title>
                    <InputGroup>
                        <RadioBox >
                            <input type='radio' value={false} defaultChecked={true} {...register('alergie')} />
                            <span className='radio-custom'></span>
                            <p>NÃO</p>
                        </RadioBox>
                        <RadioBox >
                            <input type='radio' value={true} {...register('alergie')} />
                            <span className='radio-custom'></span>
                            <p>SIM</p>
                        </RadioBox>
                        <InputText placeholder='Quais' disabled={!parseInputValue('alergie', 'alergies')} type='text' {...register('alergies')} />
                    </InputGroup>
                </div>
                <div className='form-group'>
                    <Title>Histórico de alergias na família:</Title>
                    <InputGroup>
                        <RadioBox >
                            <input type='radio' value={false} defaultChecked={true} {...register('familyAlergie')} />
                            <span className='radio-custom'></span>
                            <p>NÃO</p>
                        </RadioBox>
                        <RadioBox >
                            <input type='radio' value={true} {...register('familyAlergie')} />
                            <span className='radio-custom'></span>
                            <p>SIM</p>
                        </RadioBox>
                        <InputText placeholder='Quais' disabled={!parseInputValue('familyAlergie', 'familyAlergies')} type='text' {...register('familyAlergies')} />
                    </InputGroup>
                </div>
                <div className='form-group'>
                    <Title>Já teve alguma doença de pele:</Title>
                    <InputGroup>
                        <RadioBox >
                            <input type='radio' value={false} defaultChecked={true} {...register('skinDesease')} />
                            <span className='radio-custom'></span>
                            <p>NÃO</p>
                        </RadioBox>
                        <RadioBox >
                            <input type='radio' value={true} {...register('skinDesease')} />
                            <span className='radio-custom'></span>
                            <p>SIM</p>
                        </RadioBox>
                        <InputText placeholder='Quais' disabled={!parseInputValue('skinDesease', 'skinDeseases')} type='text' {...register('skinDeseases')} />
                    </InputGroup>
                </div>
                <div className='form-group'>
                    <Title>Cosmédicos e medicamentos em uso?</Title>
                    <InputGroup>
                        <RadioBox >
                            <input type='radio' value={false} defaultChecked={true} {...register('medicine')} />
                            <span className='radio-custom'></span>
                            <p>NÃO</p>
                        </RadioBox>
                        <RadioBox >
                            <input type='radio' value={true} {...register('medicine')} />
                            <span className='radio-custom'></span>
                            <p>SIM</p>
                        </RadioBox>
                        <InputText placeholder='Quais' disabled={!parseInputValue('medicine', 'medicines')} type='text' {...register('medicines')} />
                    </InputGroup>
                </div>
                <div className='form-group'>
                    <div>
                        <Title>Gravidez</Title>
                        <InputGroup>
                            <RadioBox >
                                <input type='radio' value={false} defaultChecked={true} {...register('pregnancy')} />
                                <span className='radio-custom'></span>
                                <p>NÃO</p>
                            </RadioBox>
                            <RadioBox >
                                <input type='radio' value={true} {...register('pregnancy')} />
                                <span className='radio-custom'></span>
                                <p>SIM</p>
                            </RadioBox>
                        </InputGroup>
                    </div>
                </div>
                <button type='submit'>SALVAR</button>
            </Form>
        </>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button{
        width:302px;
        height:51px;
        font-family: var(--body-font);
        font-weight: lighter;
        font-size: 25px;
        color: white;
        background-color: var(--button-color);
        border-radius: 5px;
        margin-top: 45px;
    }

`;

const RadioBox = styled.label`
    position: relative;
    display: flex;
    justify-content: center;
    padding-right: 48px;

        p{  
            margin-top:30px;
            font-size: 11px;
            text-align: center;
        }

        input{
            width: 22px;
            height: 23px;
            opacity: 0;
            cursor: pointer;
            position:absolute;
        }
         .radio-custom{
            width: 22px;
            height: 23px;
            background-color: #FFFF;
            border-radius: 30px;
            border: solid 2px #FFFF;
            position: absolute;
            top: 0;
        }

         input:checked ~ .radio-custom{
            background-color: var(--third-color);
            border-radius: 30px;
            border: solid 4px #FFFF;
        }
`;

const InputText = styled.input`
        width: 291px;
        height: 41px;
        border-radius:10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: var(--body-font);
        font-weight: lighter;
        color: var(--third-color);
        font-size: 20px;
        padding: 0 0 0 13px;
        margin-bottom: 22px;

        ::placeholder{
            color: var(--third-color);
            opacity: 0.7;
            align-items: center;
        }

`;

const InputGroup = styled.div`
        display: flex;
        justify-content: left;
        align-items: center;
        
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
`;