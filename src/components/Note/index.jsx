import { Container } from "./styles";
import { Tag } from "../Tag";

import { Rating } from "../Rating";

export function Note({data, ...rest}){

    const renderRatingStars = (rating) => {
        const stars = []; // Array que irá conter os ícones das estrelas
      
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            // Se o índice (i) for menor ou igual à avaliação (rating)
            stars.push(<Rating key={i} isActive/>);
            // Adiciona um ícone de estrela preenchida ao array de estrelas
          } else {
            stars.push(<Rating key={i}/>);
            // Caso contrário, adiciona um ícone de estrela opaca ao array de estrelas
          }
        }
      
        return stars; // Retorna o array de ícones de estrelas
    };
      
    return(
        <Container {...rest}>

            <h2>{data.title}</h2>

            <div>{renderRatingStars(data.rating)}</div>
            
            <p>{data.description}</p>

            {
                data.tags && 
                <div>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </div>
                
            }

        </Container>
    );

};