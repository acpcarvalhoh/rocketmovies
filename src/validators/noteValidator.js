import Joi from "joi";

export const createNoteFormSchema = Joi.object({
    title: Joi.string().required().messages({
      'string.empty': 'O Título é obrigatório.',
    }),
  
    rating: Joi.number().integer().min(0).max(5).required().messages({
      'number.empty': 'A Avaliação é obrigatória.',
      'number.min': 'A Avaliação deve ser no mínimo 0.',
      'number.max': 'A Avaliação deve ser no máximo 5.',
      'number.base': 'A Avaliação deve ser um número válido.',
    }),
  
    description: Joi.string().required().messages({
      'string.empty': 'O campo Observações é obrigatório.',
    }),
  
  }).messages({
    'object.base': 'Preencha todos os campos corretamente.',
});
  