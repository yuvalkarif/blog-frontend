import styled from "styled-components";
import Theme from "../../constants/theme";
export const Wrapper = styled.div`
  //Grid
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "title title comment"
    "body body ."
    "info info arrow";
  //Pos
  padding: 1.5rem;
  margin: 0rem 0;
  border-radius: 1rem;
  //Color and Styles
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.blockColor};
  font-size: 1.25rem;
  box-shadow: rgba(${({ theme }) => theme.shadowColor}, 0.08) 1em 2em 3.5em 0px;
  h2 {
    width: fit-content;
  }
  &:hover {
    h2::after {
      width: 100%;
    }
  }

  & > h2 {
    grid-area: title;
    margin: 0.5rem 0rem;
    color: ${({ theme }) => theme.titleColor};
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0.15em;
      background: ${({ theme }) => theme.accentColor};
      transition: width 200ms ease-in-out;
    }

    &:first-letter {
      text-transform: capitalize;
    }
  }
  & > p {
    grid-area: body;
    font-size: 1rem;
  }
  .arrow {
    grid-area: arrow;
    justify-self: end;
    align-self: end;
    width: 1.75em;
    fill: ${({ theme }) => theme.accentColor};
    transition: transform 50ms ease-in-out;
    pointer-events: auto;
    &:hover {
      cursor: pointer;
      transform: scale(115%);
    }
  }

  .comments {
    /* fill: ${({ theme }) => theme.accentColor}; */
    grid-area: comment;
    display: flex;
    justify-self: end;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.titleColor};
    & > svg {
      padding-top: 0.1em;
      margin-left: 0.1em;
      height: 1.2em;
      fill: ${({ theme }) => theme.titleColor};
    }

    .delete {
      svg {
        justify-self: end;
        align-self: center;
        fill: ${({ theme }) => theme.redColor} !important;
        transition: transform 50ms ease-in-out;
        pointer-events: auto;
        height: 1.2em;
        &:hover {
          cursor: pointer;
          transform: scale(1.2, 1.2) translate3d(0, 0, 10px);
        }
      }
    }
  }
`;

export const InfoContainer = styled.div`
  grid-area: info;
  align-self: end;

  display: flex;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.titleColor};
  }
  p {
    margin-top: 0.2em;
    font-size: 0.75em;
    font-weight: 500;
  }
`;
