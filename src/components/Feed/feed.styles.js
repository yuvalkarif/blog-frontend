import styled from "styled-components";

export const Wrapper = styled.section`
  width: clamp(22%, 960px, 92%);
  margin: 0 auto;
`;

export const PostsContainer = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 1em;
  & > * {
    flex-grow: 1;
    flex-shrink: 1;
  }
`;
