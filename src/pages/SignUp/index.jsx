import { Container, Form, Background} from "./styles";

import {FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButttonText } from "../../components/ButtonText"

export  function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie Sua conta</h2>
                <Input type="text" placeholder="Nome" icon={FiUser}/>
                <Input type="mail" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>
                <Button title="Cadastrar"/>
                <ButttonText icon={FiArrowLeft} title="Voltar para o login"/>
            </Form>

            <Background/>
        </Container>
    );
};