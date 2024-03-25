import Header from '../components/Header';
import { BgAbout, Colla } from '../styles/page_about';
import InfoLine from '../components/InfoLine';
import test from '/logo_lion.png';
import test2 from '/test1.jpg';
import bg from '/bg_info.png';
import {
  Container,
} from '../styles/ClubList';
import center from '/logo_center.png';
export default function About() {
  return (
    <Container style={{backgroundImage : {bg}}}>
    <BgAbout>
      <Header />
      <div style={{height : '40px'}}></div>
      <img src='/colla.png'></img>
      <div style={{height : '20px'}}></div>
      <h1>총동연 회장</h1>
      <InfoLine
        name="송유진"
        info="아동학과 21"
        src="'서로' 총동아리 연합회가 응원하겠습니다"
        img={center}
      />
      <h1>PM</h1>
      <InfoLine
        name="황현진"
        info="컴퓨터공학과 20"
        src="멋쟁이 사자 화이팅!"
        img={center}
      />
      <h1>DESIGN</h1>
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="멋쟁이 사자 화이팅!"
        img={test}
      />
      <InfoLine
        name="서현은"
        info="컴퓨터공학과 21"
        src="멋쟁이 사자 화이팅!"
        img={test}
      />
      <h1>DEVELOPERS</h1>
      <InfoLine
        name="유창호"
        info="컴퓨터공학과 17"
        src="멋쟁이 사자 화이팅!"
        img={test}
      />
      <InfoLine
        name="고승범"
        info="소프트웨어 공학과 18"
        src="이 페이지를 시작으로 앞으로 다른사람들에게 많은 도움이 되는 사람이 되었으면 좋겠습니다 "
        img={test}
      />
      <InfoLine
        name="김효중"
        info="컴퓨터공학과 19"
        src="멋쟁이 사자 화이팅!"
        img={test}
      />
    </BgAbout>
    </Container>
  );
}
