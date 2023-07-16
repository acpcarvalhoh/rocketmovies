import { styled } from "styled-components"

import BacgroundImg from "../../assets/background.png"

import { Link } from "react-router-dom"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;


`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 13.4rem;
    
    >h1{
        font-size: 4.8rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.ROSA};
       
    }

    >p{
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 4.8rem;
        color: ${({theme}) => theme.COLORS.GREY_100};
        
    }

    >h2{
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 3.8rem;
    }

    button{
        margin: 2.4rem 0 4.2rem;
    }

`

export const Createaccount = styled(Link)`
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.ROSA};

`

export const Background = styled.div`
    flex: 1;
    background: url(${BacgroundImg}) no-repeat center center;

`