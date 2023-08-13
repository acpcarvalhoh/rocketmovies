import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from "./syles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder  from "../../assets/avatar_placeholder.svg"
import { api } from "../../sever";

export function Profile(){
    const { user,  updateProfile} = useAuth();

    const [name, setName ] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    function handleChangeAvatar(event){
        const file = event.target.files[0];

        setAvatarFile(file);
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);

    };

    async function handleUpdateProfile(){
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        };

        await updateProfile({user, avatarFile});


    };
     
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
                          src={avatar}
                          alt="imagem do usuário"
                        />
                        <label htmlFor="avatar">
                            <FiCamera/>
                
                            <input
                              id="avatar"
                              type="file"
                              onChange={handleChangeAvatar}
                            />
                        </label>
                    </Avatar>

                    <Input 
                        type="text" 
                        icon={FiUser} 
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        type="mail" 
                        icon={FiMail} 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />    
                    <Input 
                        type="password" 
                        icon={FiLock} 
                        placeholder="Senha atual"
                        onChange={e => setOldPassword(e.target.value)}
                    />
                        
                    <Input 
                        type="password" 
                        icon={FiLock} 
                        placeholder="Nova senha"
                        onChange={e => setNewPassword(e.target.value)}
                    />

                    <Button 
                        title="Salvar"
                        onClick={handleUpdateProfile} 

                    />
                </Form>
            </main>
        </Container>
    );
};