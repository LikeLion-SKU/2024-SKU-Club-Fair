import styled from 'styled-components';

export const GlobalDiv = styled.div`
  @media screen and (max-width: 500px) {
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
  }
`;

export const GlobalHeaderContainer = styled.div`
  width: 100%;
  background-color: #eef0f3;
`;

export const GlobalHeader = styled.header`
  @media screen and (max-width: 500px) {
    flex-grow: 1;
    background-color: #eef0f3;
    display: flex;
    justify-content: space-evenly;
    margin: 5% auto;
    width: 100%;
    & li {
      list-style: none;
    }
    & a {
      text-decoration: none;
      color: black;
    }
  }
`;
