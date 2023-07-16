import { Link } from "react-router-dom";
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


`

export const Profile = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;

    >img{
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%
    }

    >div{
        display : flex;
        flex-direction: column;

        strong{
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.TEXT};
        }

        button{
            text-align: right;
            font-size: 1.4rem;
            background: none;
            color: ${({theme}) => theme.COLORS.GREY_100};
            border: none;
        }
    }

`