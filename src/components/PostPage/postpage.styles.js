import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: clamp(22%, 1280px, 85%);
  margin: 2.5rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fit, 1frf);
  grid-template-areas:
    "title title edit"
    "body body body"
    "info info info";
  //Pos
  padding: min(3.5%, 1.5rem);
  border-radius: 1rem;
  //Color and Styles
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.bgColor};
  font-size: 1.25rem;
  box-shadow: rgba(${({ theme }) => theme.shadowColor}, 0.08) 1em 2em 3.5em 0px;
  gap: 1rem;
  .edit {
    grid-area: edit;
    align-self: flex-start;
    justify-self: flex-end;
    svg {
      fill: ${({ theme }) => theme.titleColor} !important;
      transition: transform 50ms ease-in-out;
      pointer-events: auto;
      height: 1.5rem;

      &:hover {
        cursor: pointer;
        transform: scale(1.2, 1.2) translate3d(0, 0, 10px);
      }
    }
  }
  & > h2 {
    grid-area: title;
    margin: 0;
    color: ${({ theme }) => theme.titleColor};

    &:first-letter {
      text-transform: capitalize;
    }
  }
  .body {
    grid-area: body;
    font-size: 1rem;
    & > * {
      margin: 0.1em;
    }

    img {
      max-width: 100%;
      margin: 0 auto;
    }
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
  width: clamp(22%, 1280px, 85%);
  min-height: 2rem;
  margin: 2.5rem auto;
  padding: min(3.5%, 1.5rem);
  border-radius: 1rem;
  //Color and Styles
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.bgColor};
  font-size: 1.25rem;
  box-shadow: rgba(${({ theme }) => theme.shadowColor}, 0.08) 1em 2em 3.5em 0px;
  display: flex;
  flex-direction: column;
  gap: 0.35em;
  position: relative;
  transition: transform ease-in-out;
  /* padding-top: 2em; */

  .pulse {
    svg {
      animation: ${rotate} 600ms alternate infinite;
    }
  }
  .plus {
    position: absolute;
    justify-self: end;
    align-self: end;
    margin-top: -0.3rem;
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

    font-weight: 600;

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
      margin-right: 0.33em;
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

  h3 {
    color: ${({ theme }) => theme.titleColor};
    margin: 0.5rem 0;
    margin-top: 0;
  }
  textarea,
  input {
    box-sizing: border-box;
    width: 100%;
    border-radius: 1rem;
    font: inherit;
    border: none;
    background-color: ${({ theme }) => theme.blockColor};
    color: ${({ theme }) => theme.titleColor};
    margin: 0.5rem auto;
    padding: 0.85rem 0.65rem;
  }
  button {
    box-sizing: border-box;
    border-radius: 1rem;
    border: none;
    /* min-width: 20%; */
    justify-self: flex-end;
    align-self: flex-end;
    padding: 0.85rem 0.65rem;
    font-family: inherit;
    font-weight: 800;
    font-size: 1.05rem;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.accentColor};
    &:hover {
      color: ${({ theme }) => theme.bgColor};
      background-color: ${({ theme }) => theme.accentColor};
      cursor: pointer;
    }
  }
`;
