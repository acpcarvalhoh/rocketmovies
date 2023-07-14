import { styled } from "styled-components";

export const Container = styled.textarea`
    width: 100;
    height: 24.7rem;
    padding: 1.9rem 1.6rem;
    border-radius: 1rem;
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.TEXT};
    border: none;
    resize: none;
        
    &placeholder{
        font-size: 1.4rem;
        
        color: ${({theme}) => theme.COLORS.GREY_100};
    
    }

`