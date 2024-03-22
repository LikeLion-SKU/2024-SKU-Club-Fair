import Header from '../components/Header';
import { BgAbout, Colla } from '../styles/page_about';
import InfoLine from '../components/InfoLine';
import test from '/logo_lion.png';

export default function About() {
  return (
    <BgAbout>
      <Header />
      <div style={{height : '40px'}}></div>
      <img src='/colla.png'></img>
      <div style={{height : '20px'}}></div>
      <h1>총동연 회장</h1>
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="example@example.com"
        img={test}
      />
      <h1>DESIGN</h1>
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="example@example.com"
        img={test}
      />
      <h1>DEVELOPERS</h1>
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="example@example.com"
        img={test}
      />
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="example@example.com"
        img={test}
      />
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="example@example.com"
        img={test}
      />
      <InfoLine
        name="민동명"
        info="컴퓨터공학과 22"
        src="example@example.com"
        img={test}
      />
    </BgAbout>
  );
}
