import Joi from "joi";

const tldList = ['com', 'org', 'net']; 

const updateUserFormSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'O campo "Nome" é obrigatório.',
    }),

    email: Joi.string().email().required().messages({
        'string.email': 'Formato de E-mail inválido.',
        'any.required': 'O campo "E-mail" é obrigatório.',
    }),

    oldPassword: Joi.string().messages({
      'string.empty': 'O campo "Senha atual" é obrigatório.',
    }),

    newPassword: Joi.string().messages({
      'string.empty': 'O campo "Nova senha" é obrigatório.',
    }),
});