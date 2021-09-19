import styled from "styled-components";
export const Wrapper = styled.div`
  width: clamp(45%, 680px, 92%);
  min-height: 2rem;
  margin: 2.5rem auto;
  padding: min(3.5%, 1.5rem);
  border-radius: 1rem;
  //Color and Styles
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.blockColor};
  font-size: 1.25rem;
  box-shadow: rgba(${({ theme }) => theme.shadowColor}, 0.08) 1em 2em 3.5em 0px;
  display: flex;
  flex-direction: column;
  gap: 0.35em;
  position: relative;
  transition: transform ease-in-out;
  h2 {
    color: ${({ theme }) => theme.titleColor};
    margin: 0 auto;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
    margin: 0.5em;
    span {
      font-size: 1em;
      font-weight: 600;
      color: ${({ theme }) => theme.titleColor};
      margin-bottom: 0.5em;
    }
    input {
      border-radius: 1rem;
      font: inherit;
      border: none;
      background-color: ${({ theme }) => theme.bgColor};
      color: ${({ theme }) => theme.titleColor};
      padding: 0.85rem 0.5rem;
    }
  }
`;

export const ErrorMessage = styled.div`
  margin: 0.5em auto;
  color: red;
`;
