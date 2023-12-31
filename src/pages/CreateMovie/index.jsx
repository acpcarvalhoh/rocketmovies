import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../sever";

import { useForm } from "react-hook-form";
import { validateAndFormatErrors } from "../../validators/validateAndFormatErrors";
import { createNoteFormSchema } from "../../validators/noteValidator";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notify } from "../../validators/tostify";

export function CreateMovie(){
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState([]);
    const [newTag, setNewTags] = useState("");

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: async (data) => {
            return validateAndFormatErrors(createNoteFormSchema, data)
        }
        
    });


    const navigate = useNavigate();

    function handleAddTags(){
        if(!newTag){
           return 
        };

        if(!tags.includes(newTag)){
            setTags(prevState => [...prevState, newTag])
            
        };

        setNewTags("");   
    };

    function handleDeleteTag(tagName){
        const  filterTags = tags.filter(tag => tag !== tagName);

        setTags(filterTags);
    };

    function handleClearMovie(event){
        event.preventDefault();

        setTitle("");
        setRating("");
        setDescription("");
        setTags([]);
        setNewTags(""); 
    };

    async function hadleRegisterNotes(data){

        data.tags = tags;
        
        try{
            const response = await api.post("/movie_notes", data)

            Notify(`Sucesso: ${response.data.message}`);

            navigate(-1);

        } catch(error){
            if(error.response){
                Notify(`Erro: ${error.response.data.message}`);

            }else{
                Notify("Erro: Erro ao cadastar nota!!!");
            };
        }; 
    };
    

    function handleBack(){
        navigate(-1);
    };
 
    return(
        <Container>
            <Header/>

            <main>
                <button onClick={handleBack}>
                    <FiArrowLeft/>
                    Voltar
                </button>
                    
                <Form onSubmit={handleSubmit(hadleRegisterNotes)}>

                    <header>
                        <div>
                            <Input 
                                type="text"
                                value={title}
                                placeholder="Título"
                                {...register("title")}

                                onChange={(e) => {
                                    register("title").onChange(e); 
                                    setTitle(e.target.value); 
                                }}
                            />

                            {errors.title && <span>{errors.title}</span>}
                        </div>

                        <div>
                            <Input 
                                type="text"
                                value={rating}
                                placeholder="Sua nota (de 0 a 5)"
                                {...register("rating")}

                                onChange={(e) => {
                                    register("rating").onChange(e); 
                                    setRating(e.target.value); 
                                }}
                            />

                            {errors.rating && <span>{errors.rating}</span>}
                        </div>                        
                    </header>
                    <div>
                        <TextArea
                            value={description} 
                            placeholder="Observações"
                            {...register("description")}


                            onChange={(e) => {
                                register("description").onChange(e); 
                                setDescription(e.target.value); 
                            }}
                        />
                        {errors.description && <span>{errors.description}</span>}
                    </div>
                   

                    <fieldset>
                        <legend>Marcadores</legend>
                        <div className="Tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                      key={String(index)}
                                      value={tag}
                                      onClick={() => handleDeleteTag(tag)}
                                    />  

                                ))
                            }

                            <NoteItem 
                                placeholder="Novo marcador" 
                                isNew
                                value={newTag}
                                onChange={e => setNewTags(e.target.value)}
                                onClick={handleAddTags}
                            />
                        </div>
                    </fieldset>
                    
                    <footer>
                        <button onClick={handleClearMovie}>
                            Excluir filme
                        </button>

                        <Button 
                            title="Salvar alterações"
                            type="submit"
                        />
                    </footer>
                </Form>
            </main>

            <ToastContainer/>
        </Container>
    );
};