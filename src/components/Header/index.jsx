import { Container, Profile } from "./styled";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../sever";
import avatarPlaceholder  from "../../assets/avatar_placeholder.svg"

export function Header(){

    const navigate = useNavigate();
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
                        src={avatarUrl}
                        alt={`Imagem do ${user.name}`}
                    />
                </Link>

                <button onClick={handleSignOut}>Sair</button>
            </Profile>

        </Container>
    )
};
