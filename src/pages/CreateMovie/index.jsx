import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../sever";

export function CreateMovie(){
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState([]);
    const [newTag, setNewTags] = useState("");

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

    async function hadleRegisterNotes(){
        const emptyFields = !title.trim() || !rating.trim() || !description.trim() || !tags.length;

        if(emptyFields){
            return alert("Preencha todos os campos para cadastar o filme!!");
        };

        try{
            const response = await api.post("/movie_notes", { title, rating, description, tags })

            alert(response.data.message);
            navigate(-1);

        } catch(error){
            if(error.response){
                alert(error.response.data.message);

            }else{
                alert("Erro ao cadastar nota!!!");
            };
        };
    };
 
    return(
        <Container>
            <Header/>

            <main>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
                   
                <Form>
                    <header>
                        <Input 
                            type="text"
                            value={title}
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            value={rating}
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </header>

                    <TextArea
                        value={description} 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    
                    />
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
                            onClick={hadleRegisterNotes}
                        />
                    </footer>
                </Form>
            </main>
        </Container>
    );
};