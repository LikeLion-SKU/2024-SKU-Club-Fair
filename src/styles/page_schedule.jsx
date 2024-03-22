import styled from 'styled-components';
export const BgSchedule = styled.div`
    @media screen and (max-width: 500px) {
        width : 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('/bg_info.png');
        background-size: cover;
        background-repeat: repeat-y;
        background-attachment: fixed;
        background-position: top center;
        h1{
            font-family: 'LOTTERIADDAG', sans-serif;
            font-size: 36px;
        }
    }
`;
export const ScheduleBox = styled.div`
    @media screen and (max-width: 500px) {
        display: flex;
        width: 90%;
        height: auto;
        background-color: #fff5f57e;
        mix-blend-mode: multiply;
        flex-direction: column;
        justify-content: center;
        margin: 30px 23px 29px 20px;
        padding-top: 30px;
        padding-bottom: 40px;
        border-radius: 15px;
        border: 1px solid black;
        font-family: 'SUIT Variable', sans-serif;
        font-style: bold;
        hr {
            border: none;
            border-top: 2px dashed #50A65D;
            color: #fff;
            background-color: #fff;
            height: 1px;
            width: 90%;
        }
        p{
            font-weight: 600;
        }
}
`;