import { styled } from "styled-components";


export const Container = styled.span`
    font-size: 1.2rem;
    border-radius: 8px;
    padding: .5rem 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme}) => theme.COLORS.GREY_100};
    margin-right: 8px;
    font-family: 'Roboto', serif;

`