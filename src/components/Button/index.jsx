import { Container } from "./styles";


export function Button({icon: Icon, title, loading = false, ...rest}){
    return(
        <Container type="button" {...rest} disabled={loading}>
            {loading ? "Carregando..." : title}

            {Icon && <Icon size={20} />}
        </Container>
    );
};