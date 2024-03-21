import { useRef, useEffect, useState } from 'react';
import {
  ButtonsWrapper,
  ClubListWrapper,
  Container,
  Map,
} from '../styles/ClubList';
import map from '../../public/map.png';
import Header from '../components/Header';
import BoothList from '../components/BoothList';
import { clubs } from '../../clubs';

export default function Booth() {
  const [height, setHeight] = useState(null);
  const componentRef = useRef(null);

  useEffect(() => {
    if (componentRef.current) {
      const h = componentRef.current.offsetHeight;
      setHeight(h);
    }
  });
  return (
    <Container>
      <Header />
      <Map src={map}></Map>
      <ClubListWrapper ref={componentRef}>
        <h1>동아리 목록</h1>
        <ButtonsWrapper>
          {clubs.map((prod) => {
            return (
              <BoothList
                key={prod.id}
                title={prod.title}
                description={prod.description}
                img={prod.img}
                height={height}
              />
            );
          })}
        </ButtonsWrapper>
      </ClubListWrapper>
    </Container>
  );
}
