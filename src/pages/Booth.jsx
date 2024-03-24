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
  const [list, setList] = useState(true);
  const [mapControl, setMapControl] = useState(map);
  const componentRef = useRef(null);

  function listShowHandler() {
    setList((prev) => !prev);
  }

  function mapHandler(value) {
    setMapControl(value);
  }

  function mapShowHandler() {
    return <Map src={mapControl} />;
  }

  useEffect(() => {
    if (componentRef.current) {
      const h = componentRef.current.offsetHeight;
      setHeight(h);
    }
  }, []);
  return (
    <Container>
      <Header />
      {mapShowHandler()}
      <ClubListWrapper ref={componentRef} $show={list}>
        <h3 style={{ fontFamily: 'LOTTERIADDAG' }}>동아리 목록</h3>
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
                listShowHandler={listShowHandler}
                mapHandler={mapHandler}
                value={prod.map}
                defaultvalue={map}
              />
            );
          })}
        </ButtonsWrapper>
      </ClubListWrapper>
    </Container>
  );
}
