import { Container, Form, BackToLogin, Background} from "./styles";
import {FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { api } from "../../sever";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createUserFormSchema } from "../../validators/userValidator";
import { validateAndFormatErrors } from "../../validators/validateAndFormatErrors";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notify } from "../../validators/tostify";


export  function SignUp(){
    const [apiError, setApiError] = useState(null);

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: async (data) => {
            return validateAndFormatErrors(createUserFormSchema, data);
        },
    });

    const navigate = useNavigate();

    async function handleSignUp(data){ 
        
       try{
            await api.post("/users", data)
            
            Notify("Sucesso: Usuário cadastrado com sucesso!");

            setTimeout(() => {
                navigate(-1);

            }, 2000); 

        } catch(error){
            if(error.response){
                Notify(`Erro: ${error.response.data.message}`);
            
            }else{
                Notify("Erro: Não foi possível cadastrar!!!");
            }
        }; 


    };

   
    return(
        <Container>
            <Form onSubmit={handleSubmit(handleSignUp)} noValidate>

                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie Sua conta</h2>
                <Input 
                    type="text" 
                    placeholder="Nome" 
                    icon={FiUser}
                    {...register("name")}
                    
                />
                {errors.name && <span>{errors.name}</span>}

                
                <Input 
                    type="email" 
                    placeholder="E-mail" 
                    icon={FiMail}
                    {...register("email")}
                    onChange={(e) => {
                        register("email").onChange(e); 
                        setApiError(null); 
                    }}
                   
                />
                {errors.email && <span>{errors.email}</span>}
                {apiError && <span>{apiError}</span>}
               
                <Input 
                    type="password" 
                    placeholder="Senha" 
                    icon={FiLock}
                    {...register("password")}
                />
                {errors.password && <span>{errors.password}</span>}

                <Button 
                    title="Cadastrar"
                    type="submit"
                />

                <BackToLogin to="/">
                  <FiArrowLeft/>
                  Voltar para o login
                </BackToLogin>
            </Form>

            <Background/>

            <ToastContainer />            
        </Container>

            
    );
};