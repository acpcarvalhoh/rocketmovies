import { styled } from "styled-components";


export const Container = styled.button`
  width: 100%;
  border: none;
  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border-radius: 1.6rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  
  
  >h2{
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${({theme}) => theme.COLORS.TEXT};
  }


  >p{
    text-align: justify;
    line-height: 25px;
    color: ${({ theme}) => theme.COLORS.GREY_100};
    margin-bottom: 2rem;
  }
    

`