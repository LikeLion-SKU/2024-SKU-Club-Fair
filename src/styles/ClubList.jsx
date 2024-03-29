import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 500px) {
    background: url('../public/listBackground.jpg');
    display: flex;
    flex-direction: column;
    height: 100dvh;
  }
`;

export const Map = styled.img`
  display: block;
  width: 30%;
  margin: 3% auto;
  @media screen and (max-width: 500px) {
    display: block;
    height: 40%;
    width: 85%;
    margin: auto;
  }
`;

export const ClubListWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  width: 30%;
  margin: auto;
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
  & h3 {
      text-align: center;
    }
  @media screen and (max-width: 500px) {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 15px 15px 0 0;
    flex: 1;
    width: 100%;
    visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
    & h3 {
      text-align: center;
    }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 40dvh;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 40dvh;
  }
`;

export const ButtonWrapper = styled.div`
  @media screen and (max-width: 500px) {
  }
`;

export const ClubButton = styled.button`
  width: 90%;
  margin: 7px auto;
  background-color: ${({ $color }) =>
    $color ? '#E69696' : 'rgb(253, 240, 238)'};
  font-family: 'SUIT Variable', sans-serif;
  @media screen and (max-width: 500px) {
    width: 90%;
    margin: 7px auto;
    height: 5em;
    border-radius: 5px;
    background-color: ${({ $color }) =>
      $color ? '#E69696' : 'rgb(253, 240, 238)'};
    font-family: 'SUIT Variable', sans-serif;
  }
`;

export const SheetHeader = styled.div`
  & h1 {
    text-align: center;
  }
  & p {
    text-align: center;
    margin: 0px 5%;
  }
`;

/**
 * click시 버튼 색 : 0099FF;
 */
