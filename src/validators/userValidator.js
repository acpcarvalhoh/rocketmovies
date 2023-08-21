import Joi from "joi";

const tldList = ['com', 'org', 'net']; 

export const createUserFormSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'O campo Nome é obrigatório.',
    }),

    email: Joi.string().email({ tlds: { allow: tldList } }).required().messages({
      'string.empty': 'O campo E-mail é obrigatório.',
      'string.email': 'Formato de E-mail inválido.',
    }),

    password: Joi.string().required().messages({
      'string.empty': 'O campo Senha é obrigatório.',
    }),

  }).messages({
  'object.base': 'Preencha todos os campos corretamente.',

});

  
  

  