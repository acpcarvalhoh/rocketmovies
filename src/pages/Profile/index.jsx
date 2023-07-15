import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from "./syles";

import { ButttonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile(){
    return(
        <Container>
            <header>
                <ButttonText icon={FiArrowLeft} title="Voltar"/>
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
                    <Input type="text" icon={FiUser} value="Adão Carvalho" />
                    <Input type="mail" icon={FiMail} value="acp@gmail.com"/>
                    <Input type="password" icon={FiLock} placeholder="Senha atual"/>
                    <Input type="password" icon={FiLock} placeholder="Nova senha"/>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    );
};