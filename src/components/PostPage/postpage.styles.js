import styled from "styled-components";

export const Wrapper = styled.div`
  width: clamp(45%, 680px, 92%);
  margin: 2.5rem auto;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "title title comment"
    "body body ."
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

export const CommentsWrapper = styled.section`
  width: clamp(45%, 680px, 92%);
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
  .plus {
    position: absolute;
    justify-self: end;
    align-self: end;
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
  font-size: 1rem;
  h3 {
    display: flex;
    align-items: flex-end;
    gap: 0.25em;
    font-weight: 600;
    margin: 0.35em 0;
    span {
      font-size: 1em;
      color: ${({ theme }) => theme.titleColor};
    }
    p {
      align-self: center;
      font-size: 0.5em;

      color: ${({ theme }) => theme.mainColor};
    }
  }
`;
