import styled from "styled-components";

export const Wrapper = styled.section`
  width: clamp(22%, 1280px, 92%);
  margin: 0 auto;
`;

export const PostsContainer = styled.div`
  margin: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

  grid-auto-rows: auto;
  /* flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly; */
  gap: 1em;
  @media (min-width: 960px) {
    & > :first-child {
      grid-row: span 2 / auto;
      grid-column: span 2 / auto;
      font-size: 2rem;
    }
    & > :nth-child(5) {
      grid-column: span 2 / auto;
    }
    & > :nth-child(6) {
      grid-column: span 2 / auto;
    }
  }

  /* & > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }
  & > *:nth-child(even) {
    flex-direction: row-reverse;
  } */
`;
