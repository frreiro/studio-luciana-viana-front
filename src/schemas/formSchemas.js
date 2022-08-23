import joi from 'joi';

export const signupFirstSchema = joi.object({
    name: joi.string().required().messages({
        'string.empty': 'Nome é obrigatório'
    }),
    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.empty': 'Email precisa ser um email válido'
    }),
    phone: joi.string().length(11).required().messages({
        'string.empty': 'Telefone celular é obrigatório',
        'string.length': 'Numero de celular precisa ter 11 digitos'
    }),
    password: joi.string().min(8).required().messages({
        'string.empty': 'Senha é obrigatório',
        'string.min': 'Senha precisa ter no mínimo 8 digitos'
    }),
});

export const signupSecondSchema = joi.object({
    birthday: joi.string().pattern(/^([0-2][0-9]|(3)[0-1])(((0)[0-9])|((1)[0-2]))\d{4}$/).required().messages({
        'string.empty': 'Data de nascimento é obrigatório',
        'string.pattern.base': 'Data de nascimento precisa serguir o padrão DD/MM/AAAAA'
    }),
    address: joi.string().required().messages({
        'string.empty': 'Endereço é obrigatório',
    }),
    occupation: joi.string().required().messages({
        'string.empty': 'Profissão é obrigatório',
    }),
    musicStyle: joi.string().required().messages({
        'string.empty': 'Estilo de música é obrigatório',
    }),
});



export const loginSchema = joi.object({
    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.empty': 'Email precisa ser um email válido'
    }),
    password: joi.string().min(8).required().messages({
        'string.empty': 'Senha é obrigatório',
        'string.min': 'Senha precisa ter no mínimo 8 digitos'

    }),
});