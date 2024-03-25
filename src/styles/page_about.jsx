import styled from 'styled-components';

export const BgAbout = styled.div`
    @media screen and (max-width: 500px) {
        height: calc(var(--vh, 1vh) * 100);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('/bg_info.png');
        background-size: cover;
        background-attachment: fixed;
        h1{
            Arial;
            font-size: 20px;
        }
        p{
            font-family: 'SUIT Variable', sans-serif;
            word-break: keep-all;
        }
    }
`;
export const Colla = styled.div`
    @media screen and (max-width: 500px) {
        width : 228px;
        height: 78px;
        margin : 0px 0px 0px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;    
        background-image: url('/colla.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
`;