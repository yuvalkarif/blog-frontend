import styled from "styled-components";
import Theme from "../../constants/theme";
export const Wrapper = styled.div`
  //Grid
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "title title title"
    "body body ."
    "info info arrow";
  //Pos
  padding: 1.5rem;
  margin: 2.5rem 0;
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
  }
  & > p {
    grid-area: body;
    font-size: 1rem;
  }
  & > svg {
    grid-area: arrow;
    justify-self: end;
    align-self: end;
    width: 1.75em;
    fill: ${({ theme }) => theme.accentColor};
    transition: transform 50ms ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(115%);
    }
  }
  .info {
  }
`;

export const InfoContainer = styled.div`
  grid-area: info;
  /* align-self: end;
  justify-self: start; */
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
  svg {
    height: 1.2em;
    fill: ${({ theme }) => theme.mainColor};
  }
  .comments {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
