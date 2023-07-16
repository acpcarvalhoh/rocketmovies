import { Container, Form, Createaccount, Background} from "./styles";

import {FiLock, FiMail } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export  function SignIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input type="mail" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>
                <Button title="Entrar"/>
                
                <Createaccount to="/register">
                   Criar conta
                </Createaccount>
            </Form>

            <Background/>
        </Container>
    );
};