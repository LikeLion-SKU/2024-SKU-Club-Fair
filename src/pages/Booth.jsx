import {
  ButtonsWrapper,
  ClubListWrapper,
  Container,
  Map,
} from '../styles/ClubList';
import map from '../../public/map.png';
import Header from '../components/Header';
import BoothList from '../components/BoothList';

export default function Booth() {
  return (
    <Container>
      <Header />
      <Map src={map}></Map>
      <ClubListWrapper>
        <h1>동아리 목록</h1>
        <ButtonsWrapper>
          <BoothList />
          <BoothList />
          <BoothList />
          <BoothList />
          <BoothList />
          <BoothList />
          <BoothList />
          <BoothList />
          <BoothList />
          <BoothList />
          <BoothList />
        </ButtonsWrapper>
      </ClubListWrapper>
    </Container>
  );
}
