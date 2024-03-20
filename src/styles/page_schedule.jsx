import styled from 'styled-components';
export const BgSchedule = styled.div`
    @media screen and (max-width: 500px) {
        width : auto;
        height: 100dvh;
        background-color :cadetblue;
        background-image: url('../../public/bg_schedule.jpg');
    }
`;
export const TextBox = styled.div`
    width: 100%;
    height: 100px
`;
export const ScheduleBox = styled.div`
@media screen and (max-width: 500px) {
    display: flex;
    width: auto;
    height: auto;
    background-color: white;
    flex-direction: column;
    align-items: center;
    margin: 30px 23px 29px 20px;
    border-radius: 15px;
    border: 1px solid black;
    hr {
        border: none;
        border-top: 2px dashed #50A65D;
        color: #fff;
        background-color: #fff;
        height: 1px;
        width: 90%;
    }
}
`;