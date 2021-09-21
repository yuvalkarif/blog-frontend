import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: clamp(45%, 680px, 92%);
  margin: 2.5rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 70% 2ch;
  grid-template-areas:
    "title title ."
    "body body body"
    "info info info";
  //Pos
  padding: min(3.5%, 1.5rem);
  border-radius: 1rem;
  //Color and Styles
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.blockColor};
  font-size: 1.25rem;
  box-shadow: rgba(${({ theme }) => theme.shadowColor}, 0.08) 1em 2em 3.5em 0px;
  & > h2 {
    grid-area: title;
    margin: 0.5rem 0rem;
    color: ${({ theme }) => theme.titleColor};
    &:first-letter {
      text-transform: capitalize;
    }
  }
  & > p {
    grid-area: body;
    font-size: 1rem;
  }
`;
export const InfoContainer = styled.div`
  grid-area: info;
  display: flex;
  gap: 0.5em;
  align-items: end;
  h2 {
    font-size: 1em;
    margin: 0;
  }
  span {
    color: ${({ theme }) => theme.titleColor};
  }

  svg {
    height: 1em;
    margin-left: -0.4em;
    margin-bottom: 0.1em;
  }
  font-size: 1rem;
`;
const rotate = keyframes`
  from {
    transform: scale(1.0);
    /* width: 1.75em; */
  }

  to {
    transform: scale(1.2);
    /* width: 2em; */

  }
`;
export const CommentsWrapper = styled.section`
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
  padding-top: 2em;

  .pulse {
    svg {
      animation: ${rotate} 600ms alternate infinite;
    }
  }
  .plus {
    position: absolute;
    justify-self: end;
    align-self: end;
    margin-top: -1em;

    svg {
      width: 1.75em;
      fill: ${({ theme }) => theme.accentColor};
      transition: transform 50ms ease-in-out;
      pointer-events: auto;
      &:hover {
        cursor: pointer;
        transform: scale(115%);
      }
    }
  }
`;

export const CommentContainer = styled.div`
  border-bottom: 3px solid rgba(${({ theme }) => theme.accentColorRGB}, 0.35);
  padding: 0.5em 0;
  font-size: 1rem;
  h3 {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 0.25em;
    font-weight: 600;
    margin: 0.35em 0;
    span {
      font-size: 1em;
      color: ${({ theme }) => theme.titleColor};
    }
    p {
      align-self: center;
      font-size: 0.6em;

      color: ${({ theme }) => theme.mainColor};
    }
  }
  .delete {
    justify-self: flex-end;
    align-self: flex-end;
    place-self: flex-end;
    svg {
      fill: ${({ theme }) => theme.redColor} !important;
      transition: transform 50ms ease-in-out;
      pointer-events: auto;
      height: 1.2em;
      margin-right: 0.335em;
      &:hover {
        cursor: pointer;
        transform: scale(1.2, 1.2) translate3d(0, 0, 10px);
      }
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 90%;
  min-width: 90%;
  h3 {
    color: ${({ theme }) => theme.titleColor};
    margin: 0.5rem 0;
    margin-top: 0;
  }
  textarea,
  input {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    border-radius: 1rem;
    font: inherit;
    border: none;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.titleColor};
    margin: 0.5rem 0;
    padding: 0.85rem 0.65rem;
  }
  button {
    border-radius: 1rem;
    border: none;
    min-width: 20%;
    padding: 0.85rem 0.65rem;
    font-family: inherit;
    font-weight: 800;
    font-size: 1.05rem;
    margin-inline: auto -1.5em;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.accentColor};
    &:hover {
      color: ${({ theme }) => theme.bgColor};
      background-color: ${({ theme }) => theme.accentColor};
      cursor: pointer;
    }
  }
`;
