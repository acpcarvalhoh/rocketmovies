import { Container, Content } from "./styles";
import { FiArrowLeft, FiClock } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../sever";

export function MovieDetails(){
    const { user } = useAuth();
    const { id } = useParams();
    const [data, setData] = useState({});

    const createdAt = new Date(data.created_at)
    const formattedDate = createdAt.toLocaleDateString(); 
    const formattedTime = createdAt.toLocaleTimeString();

    const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


    const renderRatingStars = (rating) => {
        const stars = []; 
        
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            
            stars.push(<Rating key={i} isActive/>);
            
          } else {
            stars.push(<Rating key={i}/>);
            
            };
        };
      
        return stars; 
    };

    
    useEffect(() => {
        async function fetchMovieDetails(){
            const response = await api.get(`/movie_notes/${id}`)

            setData(response.data);

        };

        
        fetchMovieDetails();

    }, [])

    return(
        <Container>
            <Header/>
            <main>
                
                <Content>
                    <Link to="/">
                        <FiArrowLeft/>
                        Voltar
                    </Link>
                    
                    <div className="header">
                        <h1>{data.title}</h1>
                        {renderRatingStars(data.rating)}
                    </div>

                    <div className="note_description">
                        <img 
                          src={avatarUrl}
                          alt={`Imagem do ${user.name}`}
                        />
                        <span>Por {user.name}</span>
                        <FiClock/>
                        <span>{formattedDate}</span> às
                        <span>{formattedTime}</span>
                    </div>
                    
                    <section>
                        {
                            data.tags && data.tags.map(tag => (
                                <Tag 
                                    key={String(tag.id)}
                                    title={tag.name}
                                />
                            ))
                        }

                        <p>{data.description}</p>
                    </section>
                </Content>
            </main>
        </Container>
    );
};