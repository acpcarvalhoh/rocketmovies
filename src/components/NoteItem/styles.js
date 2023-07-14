import { styled } from "styled-components";

export const Container = styled.div`
    
    background: ${({ theme, isNew }) => isNew? `transparent` : theme.COLORS.BACKGROUND_700};
    border: ${({ theme, isNew}) => isNew? `1px dashed ${theme.COLORS.TEXT}` : "none"};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 1.6rem;

    >input{
        font-family: Roboto;
        color: ${({theme}) => theme.COLORS.TEXT};
        border: none;
        padding: 1.6rem;
        background: transparent;
        


        &placeholder{
            font-size: 1.4rem;
            
            color: ${({theme}) => theme.COLORS.GREY_100};
        
        }
    }

    >button{
        border: none;
        background: none;

        svg{
          color: ${({ theme, isNew}) => theme.COLORS.ROSA};
        }
    }

`