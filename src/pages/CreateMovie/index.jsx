import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButttonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TexArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function CreateMovie(){
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
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </header>

                    <TexArea placeholder="Observações"/>
                    <section>
                        <h1>Marcadores</h1>
                        <div className="Tags">
                            <NoteItem value="React"/>
                            <NoteItem placeholder="Novo marcador" isNew/>
                        </div>
                    </section>
                    
                    <footer>
                        <button>Excluir filme</button>
                        <Button title="Salvar alterações"/>
                    </footer>
                </Form>
            </main>
        </Container>
    );
};