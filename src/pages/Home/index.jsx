import { Container, Content, Links} from "./styles";

import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Rating } from "../../components/Rating"
import { Note} from "../../components/Note";
import { useEffect, useState } from "react";
import { api } from "../../sever";

export function Home(){
    const [notes, SetNotes] = useState([]);
    const [tags, setTags] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/movie_notes?title=${search}&tags=${tags}`)

            console.log(response.data)
            SetNotes(response.data);


            res

        };

        fetchNotes();
    }, [])

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
                        <Section>
                            <Note 
                                key={String(index)}
                                data={note}
                
                            />
                        </Section>
                      ))
                       
                    }
                </Content>
            </main>
        </Container>
    );
};