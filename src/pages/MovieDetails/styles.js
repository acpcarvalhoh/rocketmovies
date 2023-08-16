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
   margin: 4rem auto;
   max-width: 1120px;

   >a{
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.COLORS.ROSA};
    }
   

    .header{
        width: 100%;
        display: flex;
        margin: 2.4rem 0;
        gap: 1.9rem;
        align-items: center;
        

        h1{
            font-size: 3.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        span{
            margin-right: -9px;
        }

    }

    .note_description{
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 4.8rem;
        font-family: Roboto, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        img{
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
        }

        svg{
            color: ${({ theme}) => theme.COLORS.ROSA}
        }
    }

    >section{

        p:first-of-type{
          margin-top: 4.8rem;
        }

        p{
          text-align: justify;
          line-height: 25px;
          color: ${({ theme}) => theme.COLORS.GREY_100};
          margin-top: 2rem;
        
        }

        span{
            background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        }
    }


`


