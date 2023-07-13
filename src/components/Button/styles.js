import { styled } from "styled-components";

export const Container = styled.button`
 width: 100%;
 padding: 1rem;
 background: ${({ theme }) => theme.COLORS.ROSA};
 color: ${({ theme }) => theme.COLORS.BACKGROUND};
 border-radius: 8px;
 border: none;

 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: row-reverse;
 gap: 8px;

 &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
        
    }

`