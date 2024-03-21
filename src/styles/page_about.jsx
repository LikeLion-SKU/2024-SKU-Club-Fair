import styled from 'styled-components';

export const BgAbout = styled.div`
    @media screen and (max-width: 500px) {
        width : 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color :cadetblue;
        align-items: center;
        background-image: url('/bg_info.png');
        background-size: cover;
    }
`;
export const Colla = styled.div`
    @media screen and (max-width: 500px) {
        width : 228px;
        height: 78px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('/colla.png');
        background-size: 100% 100%;
        padding-top: 60 px;
    }
`;