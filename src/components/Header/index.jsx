import { Container, Profile } from "./styled";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

export function Header(){
    const navigate = useNavigate();
    const { signOut, user } = useAuth();

    function handleSignOut(event){
        navigate("/")
        event.stopPropagation();
        signOut();
    };

    return(
        <Container>
            <h1>Rocket Movies</h1>
            <Input placeholder="Pesquisar pelo título">
                
            </Input>
            
            <Profile>
                <Link to="/profile">
                    <strong>{user.name}</strong>
                    <img
                        src="https://github.com/acpcarvalhoh.png"
                        alt="imagem do usuário"
                    />
                </Link>

                <button onClick={handleSignOut}>Sair</button>
            </Profile>

        </Container>
    )
};
