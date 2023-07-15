import { styled } from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 8px;
    
    
    >input{
        width: 100%;
        border: none;
        padding: 1.9rem 1rem;
        border-radius: 1rem;
        background: transparent;
        color: ${({theme}) => theme.COLORS.TEXT};

        
        &placeholder{
            font-size: 1.4rem;
            
            color: ${({theme}) => theme.COLORS.GREY_100};
        
        }
    }

    >svg{
     margin-left: 1.6rem;
    }

`