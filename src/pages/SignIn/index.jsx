import { Container, Form, Background} from "./styles";

import {FiLock, FiMail } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButttonText } from "../../components/ButtonText"

export  function SignIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input type="mail" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>
                <Button title="Salvar"/>
                <ButttonText title="Criar conta"/>
            </Form>

            <Background/>
        </Container>
    );
};