import { FiStar} from "react-icons/fi"
import { FaStar } from "react-icons/fa"

 
import { Container } from "./styles";


export function ButtonRating({isActive}){
    return(
        <Container isActive={isActive}>
            {isActive ? <FaStar/> : <FiStar/>}
            
        </Container>
    );
       
    
};