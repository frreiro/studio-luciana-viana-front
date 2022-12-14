import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TokenContext } from '../../context/tokenContext.jsx';
import { RadioCouple, RadioGroupInput, RadioQuadriple, RadioTriple, Form } from '../utils/formUtils.js';
import { createAssessment, updateAssessment } from '../../services/assessment.js';


export default function AssessmentForm({ assessment, enableForm, setIsFlipped, isFlipped }) {
    const { register, handleSubmit, watch, setValue } = useForm({
    });

    const isEdditing = Object.keys(assessment).length > 1 ? true : false;
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (isEdditing) {
            for (const prop in assessment) {
                if (page !== 1) {
                    if (prop === 'alreadyWax' || prop === 'hasDiabetes' || prop === 'lastStyle') setValue(prop, `${assessment[prop]}`);
                }
                else {
                    if (assessment[prop] === null) setValue(prop.concat('Boolean'), 'false');
                    if (assessment[prop] !== null && prop !== 'id' && prop !== 'userId') {
                        setValue(prop.concat('Boolean'), 'true');
                        setValue(prop, `${assessment[prop]}`);
                    }

                }
            }
        }
    }, [page]);

    function transformFormData(data) {
        for (const prop in data) {
            if (prop.substring(prop.length - 7) === 'Boolean') delete data[prop];
            if (data[prop] === 'true' | data[prop] === 'false') data[prop] = getBooleanValueFromString(data[prop]);
        }
        return data;
    }


    const { token } = useContext(TokenContext);
    async function onSubmit(data) {
        if (page === 1) {
            setIsFlipped(!isFlipped);
            return setTimeout(() => setPage(page + 1), 100);
        }

        const formData = transformFormData(data);

        if (isEdditing) {
            delete formData.id;
            await updateAssessment(formData, token, assessment.id);
        }
        else await createAssessment(formData, token);

        enableForm(false);
    }


    function getBooleanValueFromString(stringValue) {
        return JSON.parse(stringValue);
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {
                    page === 1 ? (
                        <>
                            <RadioTriple
                                register={register}
                                name={'skinType'}
                                title={'Tipo de pele:'}
                                value1={'Seca'}
                                value2={'Oleosa'}
                                value3={'Normal'}
                            />
                            <RadioGroupInput
                                register={register}
                                watch={watch}
                                setValue={setValue}
                                name={'spots'}
                                placeholder={'Especifique:'}
                                title={'Manchas na pele:'} />

                            <RadioGroupInput
                                register={register}
                                watch={watch}
                                setValue={setValue}
                                name={'skinChanges'}
                                placeholder={'Feridas, cicatriz...'}
                                title={'Alguma altera????o na pele:'} />

                            <RadioGroupInput
                                register={register}
                                watch={watch}
                                setValue={setValue}
                                name={'acidTreatment'}
                                placeholder={'Local: perna, rosto ...'}
                                title={'Fez algum tratamento com ??cido:'} />

                            <RadioGroupInput
                                register={register}
                                watch={watch}
                                setValue={setValue}
                                name={'skinHidratation'}
                                placeholder={'Frequ??ncia'}
                                title={'Faz hidrata????o na pele:'} />

                        </>
                    ) : (
                        <>
                            <RadioCouple
                                register={register}
                                name={'hasDiabetes'}
                                title={'?? diabetico'}
                            />
                            <RadioCouple
                                register={register}
                                name={'alreadyWax'}
                                title={'J?? realizou algum tipo de depila????o com cera:'}
                            />
                            <RadioQuadriple
                                register={register}
                                name={'lastStyle'}
                                title={'M??todo de epila????o anterior:'}
                                value1={'CERA QUENTE'}
                                value2={'CERA FRIA'}
                                value3={'L??MINA'}
                                value4={'LASER'}
                                nameValue1={'CERA_QUENTE'}
                                nameValue2={'CERA_FRIA'}
                                nameValue3={'LAMINA'}
                                nameValue4={'LASER'}
                            />

                        </>
                    )
                }
                <button type='submit'>{page === 1 ? 'PR??XIMO' : 'SALVAR'}</button>
            </Form>
        </>
    );
}