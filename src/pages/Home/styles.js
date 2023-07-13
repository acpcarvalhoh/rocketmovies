import { styled } from "styled-components"

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

        button{
            max-width: 207px;
        }

        h1{
            font-size: 3.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    >section{
        p{
          text-align: justify;
          line-height: 25px;
          color: ${({ theme}) => theme.COLORS.GREY_100};
          margin-bottom: 2rem;
        }
    }


`


