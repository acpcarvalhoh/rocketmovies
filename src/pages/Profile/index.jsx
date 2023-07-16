import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from "./syles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
            </header>

            <main>
                <Form>
                    <Avatar>
                        <img
                          src="https://github.com/acpcarvalhoh.png"
                          alt="imagem do usuário"
                        />
                        <label htmlFor="avatar">
                            <FiCamera/>
                
                            <input
                              type="file"
                            />
                        </label>
                    </Avatar>
                    <Input type="text" icon={FiUser} placeholder="Nome"/>
                    <Input type="mail" icon={FiMail} placeholder="E-mail"/>
                    <Input type="password" icon={FiLock} placeholder="Senha atual"/>
                    <Input type="password" icon={FiLock} placeholder="Nova senha"/>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    );
};