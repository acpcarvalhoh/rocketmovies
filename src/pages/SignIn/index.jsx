import { Container, Form, Createaccount, Background} from "./styles";
import {FiLock, FiMail } from "react-icons/fi"

import { createSignInSchema } from "../../validators/userSignInValidator";
import { validateAndFormatErrors } from "../../validators/validateAndFormatErrors";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export  function SignIn(){
    const { signIn } = useAuth();

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: async (data) => {
            return validateAndFormatErrors(createSignInSchema, data);
        },

    });

   
    function handleSignIn(data){
        signIn(data);
    
    };


    return(
        <Container>
            <Form onSubmit={handleSubmit(handleSignIn)}>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input 
                    type="mail" 
                    placeholder="E-mail" 
                    icon={FiMail}
                    {...register("email")}
                />
                {errors.email && <span>{errors.email}</span>}

                <Input 
                    type="password" 
                    placeholder="Senha" 
                    icon={FiLock}
                    {...register("password")}
                />
                {errors.password && <span>{errors.password}</span>}

                <Button 
                    title="Entrar" 
                    type="submit"
                />
                
                <Createaccount to="/register">
                   Criar conta
                </Createaccount>
            </Form>

            <Background/>

            <ToastContainer/>
        </Container>
    );
};