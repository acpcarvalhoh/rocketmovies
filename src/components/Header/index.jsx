import { Container, Profile } from "./styled";
import { Input } from "../Input";


export function Header(){
    return(
        <Container>
            <h1>Rocket Movies</h1>
            <Input placeholder="Pesquisar pelo título">
                
            </Input>
            <Profile>
                <div>
                    <strong>Adão Carvalho</strong>
                    <button>Sair</button>
                </div>

                <img src="https://github.com/acpcarvalhoh.png" alt="imagem do usuário" />
            </Profile>
        </Container>
    )
};
