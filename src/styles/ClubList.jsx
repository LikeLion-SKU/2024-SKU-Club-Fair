import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 500px) {
    background-color: #eef0f3;
    display: flex;
    flex-direction: column;
    height: 100dvh;
  }
`;

export const Map = styled.img`
  @media screen and (max-width: 500px) {
    display: block;
    flex-grow: 1.5;
    width: 100%;
  }
`;

export const ClubListWrapper = styled.div`
  @media screen and (max-width: 500px) {
    background-color: white;
    border-radius: 15px 15px 0 0;
    flex: 1;
    width: 100%;
`;

export const ButtonsWrapper = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 30dvh;
  }
`;

export const ButtonWrapper = styled.div`
  @media screen and (max-width: 500px) {
  }
`;

export const ClubButton = styled.button`
  @media screen and (max-width: 500px) {
    width: 80%;
    margin: 15px auto;
    height: 3em;
    border-radius: 5px;
    background-color: ${({ $color }) => ($color ? '#0099ff' : '#eef0f3')};
  }
`;

/**
 * click시 버튼 색 : 0099FF;
 */
