import { styled } from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center; 
    align-items: center;
    background: none;
    border: none;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.ROSA};

`