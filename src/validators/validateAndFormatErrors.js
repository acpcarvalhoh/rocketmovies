// Função utilitária para validar e formatar erros com base no esquema fornecido.
export function validateAndFormatErrors(schema, data) {
    // Realiza a validação dos dados usando o esquema fornecido.
    const { error, value } = schema.validate(data, { abortEarly: false });

    if (error) {
        // Se houver erros na validação, formata os erros para um objeto chave-valor.
        const formattedErrors = error.details.reduce(
            // Utiliza a função 'reduce' para transformar a matriz de detalhes de erro em um objeto de erros formatados.
            (acc, curr) => ({ ...acc, [curr.context.key]: curr.message }),
            {} // Inicializa o acumulador como um objeto vazio.
        );

        // Retorna um objeto contendo os valores vazios e os erros formatados.
        return {
            values: {},
            errors: formattedErrors,
        };
    }

    // Retorna um objeto contendo os valores validados e sem erros.
    return {
        values: value,
        errors: {},
    };
};

  