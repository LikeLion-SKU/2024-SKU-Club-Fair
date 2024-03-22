import styled from 'styled-components';

export const BgAbout = styled.div`
    @media screen and (max-width: 500px) {
        width : 100%;
        height: 100dvh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('/bg_info.png');
        background-size: cover;
        background-attachment: fixed;
        h1{
            font-family: 'LOTTERIADDAG', sans-serif;
            font-size: 20px;
        }
        p{
            font-family: 'SUIT Variable', sans-serif;
        }
    }
`;
export const Colla = styled.div`
    @media screen and (max-width: 500px) {
        width : 228px;
        height: 78px;
        margin : 40px 0px;
        background-image: url('/colla.png');
        background-size: contain;
        background-repeat: no-repeat;
    }
`;