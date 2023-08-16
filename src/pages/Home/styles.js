import { styled } from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "main";

    >main{
        grid-area: main;
        overflow-y: auto;
        margin: 0 2rem;
    }


`
export const Content = styled.div`
   margin: 5rem auto;
   max-width: 1120px;
   display: flex;
   
   
   flex-direction: column;

    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;

        h1{
            font-size: 3.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }


`

export const Links = styled(Link)`
    width: 100%;
    padding: 1rem;
    background: ${({ theme }) => theme.COLORS.ROSA};
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border-radius: 8px;
    max-width: 207px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;  

`


