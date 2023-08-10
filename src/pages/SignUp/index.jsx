import { Container, Form, BackToLogin, Background} from "./styles";
import {FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useState } from "react";
import { api } from "../../sever";
import { useNavigate } from "react-router-dom";

export  function SignUp(){
    const [name, setName ] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")

    const navigate = useNavigate();

    async function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preençha todos os campos do formulário!!")
        };

        try{
            await api.post("/users", {name, email, password})

            alert("Usuário cadastrado com sucesso!!!")
            navigate(-1)

        } catch(error){
            if(error.response){
                alert(error.response.data.message)

            }else{
                alert("Não foi possivel cadastrar!!!")
            }
        };


    };


    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie Sua conta</h2>
                <Input 
                    type="text" 
                    placeholder="Nome" 
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                
                />

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

                <Button 
                    title="Cadastrar"
                    onClick={handleSignUp}
                />

                <BackToLogin to="/">
                  <FiArrowLeft/>
                  Voltar para o login
                </BackToLogin>
            </Form>

            <Background/>
        </Container>
    );
};