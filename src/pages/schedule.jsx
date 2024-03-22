import Header from '../components/Header';
import { scheduleInfo } from '../../scheduleInfo';
import { BgSchedule,ScheduleBox } from '../styles/page_schedule';
import TimeLine from '../components/TimeLine';
// 공연 정보 페이지
// 타임라인으로 공연 정보 생성, 마지막 빼고 점선 설정
export default function Schedule() {
    return (
        <BgSchedule>
            <Header />
            <h1>MARCH 27</h1>
            <ScheduleBox>
            {scheduleInfo.map((prod, index) => (
                <>
                <TimeLine
                key={prod.id}
                name={prod.name}
                time={prod.time}
                img={prod.img}
                />
                {index !== scheduleInfo.length - 1 && <hr />}
                </>
            ))}
            </ScheduleBox>
        </BgSchedule>
    );
}