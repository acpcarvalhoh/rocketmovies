import { FiStar} from "react-icons/fi"
import { FaStar } from "react-icons/fa"

import { Container } from "./styles";

export function Rating({isActive = false}){
    return(
        <Container $isactive={isActive.toString()}>
            {isActive ? <FaStar/> : <FiStar/>}
            
        </Container>
    );
       
    
};