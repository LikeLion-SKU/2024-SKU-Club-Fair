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
  background-color: #eef0f300;
  font-family: 'LOTTERIADDAG', sans-serif;
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

// /* Group 4487538 */

// position: absolute;
// width: 336px;
// height: 18px;
// left: calc(50% - 336px/2);
// top: 46px;

// /* Group 4487591 */

// position: absolute;
// width: 60px;
// height: 4px;
// left: 121px;
// top: calc(50% - 4px/2 - 411px);

// /* Line 21 */

// position: absolute;
// width: 60px;
// height: 0px;
// left: 121px;
// top: 57px;

// border: 1px solid #000000;
