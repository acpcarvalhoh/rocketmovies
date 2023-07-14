import { Container, Content } from "./styles";

import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section";
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tag";

export function Home(){
    return(
        <Container>
            <Header/>
            <main>
                <Content>
                    <div className="header">
                        <h1>Meus filmes</h1>
                        
                        <Button icon={FiPlus} title="Acicionar filme"/>
                    </div>
                    
                    <Section title="Interestellar">
                        <Rating/>

                        <p>
                        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando...
                     </p>

                        <Tag title="Ficção Científica"/>
                        <Tag title="Drama"/> 
                        <Tag title="Família"/>    
                    </Section>

                    <Section title="Interestellar">
                        <Rating/>

                        <p>
                        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando...
                     </p>

                        <Tag title="Ficção Científica"/>
                        <Tag title="Drama"/> 
                        <Tag title="Família"/>    
                    </Section>
                </Content>
            </main>
        </Container>
    );
};