import styled from "styled-components";
export const Wrapper = styled.section`
  width: clamp(45%, 680px, 92%);
  margin: 2.5rem auto;
  display: grid;
  padding: min(3.5%, 1.5rem);
  border-radius: 1rem;
  //Color and Styles
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.blockColor};
  font-size: 1.25rem;
  box-shadow: rgba(${({ theme }) => theme.shadowColor}, 0.08) 1em 2em 3.5em 0px;
  h2 {
    margin: 0 auto;
    margin-bottom: min(3.5%, 1.5rem);
    color: ${({ theme }) => theme.titleColor};
  }
  .tox {
    height: 50vh !important;
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.bgColor};
    font-family: inherit;
  }
`;

export const Submit = styled.button`
  border-radius: 1rem;
  border: none;
  min-width: 20%;
  padding: 0.85rem 0.65rem;
  font-family: inherit;
  font-weight: 800;
  font-size: 1.05rem;
  margin: 0 auto;
  margin-top: min(3.5%, 1.5rem);
  background-color: ${({ theme }) => theme.blockColor};
  color: ${({ theme }) => theme.accentColor};
  &:hover {
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.accentColor};
    cursor: pointer;
  }
`;
