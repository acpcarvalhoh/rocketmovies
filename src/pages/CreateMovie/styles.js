import { styled } from "styled-components";

export const Container = styled.div`
    height: 100vh;;
    width: 100%;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "main";

    >main{
        grid-area: main;
        padding: 4rem 12.3rem 9rem;
        overflow-y: auto;

        >button{
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${({ theme }) => theme.COLORS.ROSA};
            border: none;
            background: none;
        }
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 2.4rem auto;

    >header{
        display: flex;
        justify-content: space-between;
        gap: 5.6rem;
        margin-bottom: 4rem;
    }

    >fieldset{
        margin-top: 4rem;
        border: none;

        legend{
            color: ${({theme}) => theme.COLORS.GREY_100};
            margin-bottom: 2.4rem;
            font-size: 2rem;
            font-weight: 400;
            line-height: normal;
            
        }

        .Tags{
            width: 100%;
            background: ${({theme}) => theme.COLORS.BACKGROUND_900};
            border-radius: 8px;
            padding: 1.6rem;
            display: flex;
            flex-wrap: wrap;
            gap: 2.4rem;

           
        }
    }

    >footer{
        width: 100%;
        margin-top: 4rem;
        display: flex;
        gap: 4rem;
        justify-content: space-between;
        align-items: center;

        button{
            height: 5.6rem;
        }

        button:first-of-type {
            width: 100%;
            color: ${({ theme }) => theme.COLORS.ROSA};
            background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            border-radius: 8px;
            border: none;
            padding: 1rem;
            cursor: pointer;
            height: 5.6rem;

            &:disabled{
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    }

`

