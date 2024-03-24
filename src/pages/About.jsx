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
      <h1>DESIGN</h1>
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="멋쟁이 사자 화이팅!"
        img={test}
      />
      <h1>DEVELOPERS</h1>
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="멋쟁이 사자 화이팅!"
        img={test}
      />
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="멋쟁이 사자 화이팅!"
        img={test}
      />
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="멋쟁이 사자 화이팅!"
        img={test}
      />
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 19"
        src="멋쟁이 사자 화이팅!"
        img={test}
      />
    </BgAbout>
    </Container>
  );
}
