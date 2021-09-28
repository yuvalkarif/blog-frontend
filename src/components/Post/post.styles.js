import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  //Color and Styles
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.blockColor};
  font-size: 1.25rem;
  box-shadow: rgba(${({ theme }) => theme.shadowColor}, 0.08) 1em 2em 3.5em 0px;
  gap: 1rem;
  //Grid
  /* width: 65%; */
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "title title ."
    "info info comment";

  //Pos
  background-image: linear-gradient(
      to right,
      rgba(${({ theme }) => theme.rgbBgColor}, 1),
      rgba(${({ theme }) => theme.rgbBgColor}, 1),
      rgba(0, 0, 0, 0)
    ),
    url(${(props) => props.thumbnail});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;

  h2 {
    width: fit-content;
    margin: 0;
  }
  &:hover {
    h2::after {
      width: 100%;
    }
  }

  & > h2 {
    grid-area: title;

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
  .body {
    grid-area: body;
    font-size: 1rem;
    max-height: 10ch;
    overflow: hidden;
  }

  .arrow {
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
    background: rgba(${({ theme }) => theme.rgbBgColor}, 0.9);
    border-radius: 1rem;
    padding: 0.25em;
    grid-area: comment;
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;
    justify-content: center;
    color: ${({ theme }) => theme.titleColor};
    font-size: 1.5rem;
    height: fit-content;
    width: fit-content;
    span {
      height: fit-content;
    }
    & > svg {
      padding-top: 0.1em;
      margin-left: 0.1em;
      height: 1.5rem;
      fill: ${({ theme }) => theme.titleColor};
    }

    .delete {
      height: fit-content;
      svg {
        fill: ${({ theme }) => theme.redColor} !important;
        transition: transform 50ms ease-in-out;
        pointer-events: auto;
        height: 1.5rem;
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
