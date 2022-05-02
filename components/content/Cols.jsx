import styled from "styled-components";

export const TwoColLayout = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;

export const Col = styled.div`
  &:first-of-type {
    padding-right: 1rem;
  }
  width: 50%;
`;
