import { styled } from "styled-components";

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    height: 11.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom-width: 1px;  
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding: 0 123px;

    >h1{
        font-size: 2.4rem;
        font-weight: 700;
        line-height: normal;

        color: ${({theme}) => theme.COLORS.ROSA};
    }

    >div{
        max-width: 630px;
    }


    @media (max-width: 1100px) {
        padding: 0 20px;
    }


`

export const Profile = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    position: relative;
    
    >a{
        display : flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        img{
            width: 5.6rem;
            height: 5.6rem;
            border-radius: 50%;
        }

        strong{
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.TEXT};
            
        }


        @media (max-width: 1000px) {
            flex-direction: column-reverse;
            align-items: right;
            justify-content: right;
            width: 150px;

        }
    }


    >button{
        font-size: 1.4rem;
        background: none;
        color: ${({theme}) => theme.COLORS.GREY_100};
        border: none;
        position: absolute;
        bottom: 0;
        
    }

`