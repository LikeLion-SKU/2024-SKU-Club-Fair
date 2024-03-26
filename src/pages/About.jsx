import Header from '../components/Header';
import { BgAbout, Colla } from '../styles/page_about';
import InfoLine from '../components/InfoLine';
import test from '/logo_lion.png';
import test2 from '/test1.jpg';
import bg from '/bg_info.png';
import { Container } from '../styles/ClubList';
import center from '/logo_center.png';
export default function About() {
  return (
    <Container style={{ backgroundImage: { bg }}}>
      <BgAbout>
        <Header />
        <div style={{ height: '40px', padding: '20px' }}></div>
        <img src="/collabo.svg"></img>
        <div style={{ height: '20px', padding: '20px' }}></div>
        <h1>총동연 회장</h1>
        <InfoLine
          name="송유진"
          info="아동학과 21"
          src="'서로' 총동아리연합회가 응원하겠습니다"
          img={center}
        />
        <h1>PM</h1>
        <InfoLine
          name="황현진"
          info="컴퓨터공학과 20"
          src="알림제를 시작으로 다양한 활동을 보여드리겠습니다! 만관부!"
          img={center}
        />
        <h1>DESIGN</h1>
        <InfoLine
          name="서현은"
          info="컴퓨터공학과 22"
          src="깔깔.."
          img={'/ME.png'}
        />
        <InfoLine
          name="민동명"
          info="컴퓨터공학과 22"
          src="사랑한다 동기들아!"
          img={test}
        />
        <h1>DEVELOPERS</h1>
        <InfoLine
          name="유창호"
          info="컴퓨터공학과 20"
          src="프로젝트 참여한 모든분들 고생하셨고 이 페이지 보는 모든 분들 올해 잘되시길"
          img={test}
        />
        <InfoLine
          name="고승범"
          info="소프트웨어학과 18"
          src="이 페이지를 시작으로 앞으로 다른사람들에게 많은 도움이 되는 사람이 되었으면 좋겠습니다 "
          img={test}
        />
        <InfoLine
          name="김효중"
          info="컴퓨터공학과 19"
          src="남에겐 작게 보이지만 내겐 큰 한 걸음"
          img={test}
        />
      </BgAbout>
    </Container>
  );
}
