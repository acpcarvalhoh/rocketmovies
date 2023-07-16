import { Container } from "./styles";

import { Tag } from "../Tag";

export function Note({data, ...rest}){
    return(
        <Container {...rest}>

            <h2>{data.title}</h2>

            {data.rating}

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