import styled from "styled-components";

export const Wrapper = styled.header`
  border-radius: 0rem 0rem 1rem 1rem;
  //Color and Styles
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.bgColor};
  @media (min-width: 960px) {
    font-size: 1.25rem;
  }
  padding: min(1rem, 2vw);
  font-size: 0.8rem;
  box-shadow: rgba(${({ theme }) => theme.shadowColor}, 0.08) 1em 2em 3.5em 0px;
`;

export const Container = styled.div`
  width: clamp(33vw, 980px, 90%);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.titleColor};
  .toggle {
    margin-top: 0.6em;
    overflow: visible !important;
    align-self: center;
  }
  h1 {
    margin: 0;
  }
  & > div {
    display: flex;
    align-items: center;
  }
  .logout {
    ::after {
      background: ${({ theme }) => theme.redColor};
    }
  }
  span {
    font-weight: 600;
    position: relative;
    padding-top: 0.2em;
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
