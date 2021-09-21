import styled, { keyframes } from "styled-components";

const hover = keyframes`
from{

}
to{
    
}`;

export const Wrapper = styled.header`
  padding: 1.5rem;
  border-radius: 0rem 0rem 1rem 1rem;
  //Color and Styles
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.blockColor};
  font-size: 1.25rem;
  box-shadow: rgba(${({ theme }) => theme.shadowColor}, 0.08) 1em 2em 3.5em 0px;
  padding: 1rem 1.5rem;
`;

export const Container = styled.div`
  width: clamp(33vw, 780px, 90%);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.titleColor};
  h1 {
    margin: 0;
  }
  div {
    display: flex;
  }
  .logout {
    ::after {
      background: ${({ theme }) => theme.redColor};
    }
  }
  span {
    font-weight: 600;
    position: relative;
    padding-top: 0.4em;
    margin: 0 0.5em;
    display: inline-block;

    ::after {
      content: "";
      display: block;
      width: 0;
      height: 0.15em;
      background: ${({ theme }) => theme.accentColor};
      border-radius: 1rem;
      transition: width 0.3s;
    }

    &:hover {
      cursor: pointer;
      &::after {
        width: 100%;
      }
    }
  }
`;
