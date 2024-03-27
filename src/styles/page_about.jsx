import styled from 'styled-components';

export const BgAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: Black Han Sans,
        font-weight: 400,
        font-style: normal,
    }
    p{
        font-family: SUIT Variable, sans-serif;
        word-break: keep-all;
    }
    @media screen and (max-width: 500px) {
        height: calc(var(--vh, 1vh) * 100);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('/bg_info.png');
        background-size: cover;
        background-attachment: fixed;
        h1{
            font-family: Black Han Sans,
            font-weight: 400,
            font-style: normal,
        }
        p{
            font-family: SUIT Variable, sans-serif;
            word-break: keep-all;
        }
    }
`;
export const Colla = styled.div`
  width: 228px;
  height: 78px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/collabo.svg');
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 500px) {
    width: 228px;
    height: 78px;
    margin: 0px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('/collabo.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const InfoContainer = styled.div`
  width: 30%;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const InfoBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  padding-top: 5px;
  justify-content: center;
  background-image: url('/box_about.png');
  background-size: 100% 100%;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90px;
    padding-top: 5px;
    justify-content: center;
    background-image: url('/box_about.png');
    background-size: 100% 100%;
  }
`;

export const NameBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  align-items: center;
  padding-left: 15px;
  & img {
    width: 29px;
    height: 29px;
    margin-left: 15px;
    clip-path: circle(50%);
  }
  & p {
    margin-left: 11px;
    font-size: 20px;
    font-family: SUIT Variable;
    font-weight: bold;
  }
  & p:last-child {
    margin-left: 10px;
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    align-items: center;
    padding-left: 15px;
    & img {
      width: 29px;
      height: 29px;
      margin-left: 15px;
      clip-path: circle(50%);
    }
    & p {
      margin-left: 11px;
      font-size: 20px;
      font-family: SUIT Variable;
      font-weight: bold;
    }
    & p:last-child {
      margin-left: 10px;
      font-size: 10px;
    }
  }
`;

export const OneWord = styled.p`
  padding-left: 69px;
  padding-right: 10px;
  font-family: BMJUA;
  margin: 2px;
  font-size: 5%;
  @media screen and (max-width: 500px) {
    padding-left: 69px;
    padding-right: 10px;
    font-family: BMJUA;
    margin: 2px;
    font-size: 3vw;
  }
`;
