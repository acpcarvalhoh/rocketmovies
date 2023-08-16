import { Container, Content, Links} from "./styles";

import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Note} from "../../components/Note";
import { useEffect, useState } from "react";
import { api } from "../../sever";
import { useSearch } from "../../hooks/search";
import { useNavigate } from "react-router-dom";

export function Home(){
    const [notes, SetNotes] = useState([]);
    const [tags, setTags] = useState([]);
    const { search } = useSearch();
    const navigate = useNavigate();

    function handleMovieDetails(id){
        navigate(`/moviedetails/${id}`);

    };

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/movie_notes?title=${search}&tags=${tags}`)

            SetNotes(response.data);

            

        };

        fetchNotes();

    }, [search]);

    return(
        <Container>
            <Header/>
            <main>
                <Content>
                    <div className="header">
                        <h1>Meus filmes</h1>

                        <Links to="/createmovie">
                            <FiPlus/>
                            Acicionar filme
                        </Links>
                    </div>
                    
                    {
                      notes && notes.map((note) => (
                        <Section key={String(note.id)}>
                            <Note 
                                data={note}
                                onClick={() => handleMovieDetails(note.id)}
                            />
                        </Section>
                      ))
                       
                    }
                </Content>
            </main>
        </Container>
    );
};