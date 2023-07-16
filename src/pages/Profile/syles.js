import { styled } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 14.4rem auto;
    grid-template-areas:
    "header"
    "main";

    >header{
        grid-area: header;
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
        padding: 0 14.4rem;
        display: flex;
        align-items: center;

        a{
            display: flex; 
            align-items: center;
            gap: 8px;
            color: ${({ theme }) => theme.COLORS.ROSA};
        }
    }

    >main{
        grid-area: main;
    
    }

`


export const Form = styled.form`
    margin: -9rem auto 1rem;
    max-width: 350px;

    div:nth-child(3){
        margin-bottom: 2.4rem;
    }

    button{
        margin-top: 2.4rem;
    }

`

export const Avatar = styled.div`
    position: relative;
    width: 18.6rem;
    height: 18.6rem;
    margin: 0 auto 4.4rem;
    

    >img{
        width: 100%;
        object-fit: contain;
        border-radius: 50%;
    }

    >label{
        position: absolute;
        height: 4.8rem;
        width: 4.8rem;
        background: ${({ theme }) => theme.COLORS.ROSA};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        input{
            display: none;
            
        }


        svg{
            color: ${({ theme }) => theme.COLORS.BACKGROUND};
        }
    }





`