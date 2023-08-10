import { Container, Form, Createaccount, Background} from "./styles";

import {FiLock, FiMail } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";


export  function SignIn(){
    const { signIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn(){
        signIn({email, password});

        console.log(email, password)
    };


    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input 
                    type="mail" 
                    placeholder="E-mail" 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    type="password" 
                    placeholder="Senha" 
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>
                
                <Createaccount to="/register">
                   Criar conta
                </Createaccount>
            </Form>

            <Background/>
        </Container>
    );
};