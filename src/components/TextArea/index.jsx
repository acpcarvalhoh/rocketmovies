import { Container } from "./styles";


export function TexArea({value, ...rest}){
    return(
        <Container {...rest}>
            {value}
        </Container>
    );
};