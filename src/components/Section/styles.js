import { styled } from "styled-components";


export const Container = styled.section`
  width: 100%;
  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border-radius: 1.6rem;
  padding: 3.2rem;
  


  >h2{
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 8px;
  }
`