import { Link } from 'react-router-dom';

import likelion from '../../images/likelion.jpg';
import test1 from '../../images/test1.jpg';
import IntroHeader from '../components/IntroHeader';

const DUMMY = [
  { id: '멋사', title: '멋사', type: 'it', img: likelion },
  { id: '몰루', title: '몰루', type: 'art', img: test1 },
  { id: '몰루1', title: '몰루1', type: 'social', img: test1 },
  { id: '몰루2', title: '몰루2', type: 'scholar', img: test1 },
  { id: '몰루3', title: '몰루3', type: 'gym', img: test1 },
];

export default function DongariIntro() {
  return (
    <>
      <IntroHeader />
      <ul>
        {DUMMY.map((prod) => {
          return (
            <li key={prod.id}>
              <Link to={`${prod.id}`}>
                <img src={prod.img} />
                {prod.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
