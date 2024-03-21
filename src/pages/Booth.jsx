import { useRef, useEffect, useState } from 'react';
import {
  ButtonsWrapper,
  ClubListWrapper,
  Container,
  Map,
} from '../styles/ClubList';
import map from '../../public/map.svg';
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
  }, [height]);
  return (
    <Container>
      <Header />
      <Map src={map}></Map>
      <ClubListWrapper ref={componentRef}>
        <h3>동아리 목록</h3>
        <ButtonsWrapper>
          {clubs.map((prod) => {
            return (
              <BoothList
                key={prod.id}
                title={prod.title}
                description={prod.description}
                img={prod.img}
                height={height}
                activity={prod.activity}
                representatives={prod.representatives}
                sns={prod.sns}
                clubinfo={prod.clubinfo}
              />
            );
          })}
        </ButtonsWrapper>
      </ClubListWrapper>
    </Container>
  );
}
