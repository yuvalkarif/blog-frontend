import styled from "styled-components";

export const Wrapper = styled.section`
  width: clamp(22%, 1080px, 92%);
  margin: 0 auto;
`;

export const PostsContainer = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  /* align-items: flex-start; */
  align-content: flex-start;
  justify-content: start;

  gap: 1em;
  & > * {
    flex-grow: 1;
    flex-shrink: 1;
  }
  & > *:nth-child(even) {
    flex-direction: row-reverse;
  }
`;
