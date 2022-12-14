import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TokenContext } from '../../context/tokenContext.jsx';
import { updateHistoric } from '../../services/historic.js';
import { createHistoric } from '../../services/historic.js';
import { RadioGroupInput, RadioCouple, Form } from '../utils/formUtils.js';


export default function HistoricForm({ enableForm, historic, setIsFlipped, isFlipped }) {
    const { register, handleSubmit, watch, setValue } = useForm({
    });
    const isEdditing = Object.keys(historic).length > 1 ? true : false;

    useEffect(() => {
        if (isEdditing) {
            for (const prop in historic) {
                if (historic[prop] === null) setValue(prop.concat('Boolean'), 'false');
                if (historic[prop] !== null && prop !== 'id' && prop !== 'userId') {
                    setValue(prop.concat('Boolean'), 'true');
                    setValue(prop, `${historic[prop]}`);
                }
            }
        }

    }, []);


    function transformFormData(data) {
        for (const prop in data) {
            if (prop.substring(prop.length - 7) === 'Boolean') delete data[prop];
            if (data[prop] === 'true' | data[prop] === 'false') data[prop] = getBooleanValueFromString(data[prop]);
        }
        return data;
    }


    function getBooleanValueFromString(stringValue) {
        return JSON.parse(stringValue);
    }

    const { token } = useContext(TokenContext);
    async function onSubmit(data) {
        const formData = transformFormData(data);
        if (isEdditing) {
            await updateHistoric(formData, token, historic.id);
        }
        else await createHistoric(formData, token);

        setIsFlipped(!isFlipped);
        setTimeout(() => enableForm(false), 100);

    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <RadioGroupInput
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    name={'alergies'}
                    placeholder={'Quais'}
                    title={'Alergias:'} />

                <RadioGroupInput
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    name={'familyAlergies'}
                    placeholder={'Quais'}
                    title={'Hist??rico de alergias na fam??lia:'} />

                <RadioGroupInput
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    name={'skinDeseases'}
                    placeholder={'Quais'}
                    title={'J?? teve alguma doen??a de pele:'} />


                <RadioGroupInput
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    name={'medicines'}
                    placeholder={'Quais'}
                    title={'Cosm??dicos e medicamentos em uso:'} />

                <RadioCouple
                    register={register}
                    name={'pregnancy'}
                    title={'Gravidez:'}
                />
                <button type='submit'>SALVAR</button>
            </Form>
        </>
    );
}

