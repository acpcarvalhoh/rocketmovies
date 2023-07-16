import { Container, Content, Links} from "./styles";

import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tag";
import { Note} from "../../components/Note";

export function Home(){
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
                    
                    <Section>
                        <Note data={
                            {
                                title: "Interestelar", 
                                rating: <Rating/>,
                                description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando...',
                                tags: [
                                    {id: "1", name: "Ficção Científica"},
                                    {id: "2", name: "Drama"},
                                    {id: "3", name: "Família"}
                                ]
                            }
                        }/>

                        <Note data={
                            {
                                title: "Interestelar", 
                                rating: <Rating/>,
                                description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando...',
                                tags: [
                                    {id: "1", name: "Ficção Científica"},
                                    {id: "2", name: "Drama"},
                                    {id: "3", name: "Família"}
                                ]
                            }
                        }/>
                    </Section>
                </Content>
            </main>
        </Container>
    );
};