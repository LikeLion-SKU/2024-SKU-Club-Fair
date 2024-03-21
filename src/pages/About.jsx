import Header from '../components/Header';
import { BgAbout ,Colla} from '../styles/page_about';
import InfoLine from '../components/InfoLine';
export default function About() {
  return (
    <BgAbout>
      <Header />
      <Colla style={{marginTop : '60px'}}/>
      <h1>총동연 회장</h1>
      <InfoLine name="민동명" info="컴퓨터공학과 22" src="example@example.com" img="../../public/logo_lion.png" />
      <h1>DESIGN</h1>
      <InfoLine name="민동명" info="컴퓨터공학과 22" src="example@example.com" img="../../public/logo_lion.png" />
      <h1>DEVELOPERS</h1>
      <InfoLine name="민동명" info="컴퓨터공학과 22" src="example@example.com" img="../../public/logo_lion.png" />
      <InfoLine name="민동명" info="컴퓨터공학과 22" src="example@example.com" img="../../public/logo_lion.png" />
      <InfoLine name="민동명" info="컴퓨터공학과 22" src="example@example.com" img="../../public/logo_lion.png" />
      <InfoLine name="민동명" info="컴퓨터공학과 22" src="example@example.com" img="../../public/logo_lion.png" />
    </BgAbout>
  );
}
