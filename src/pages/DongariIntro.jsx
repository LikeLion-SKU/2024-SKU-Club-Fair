import { Link } from 'react-router-dom';
import { useState } from 'react';

import likelion from '../../public/likelion.jpg';
import test1 from '../../public/test1.jpg';


const DUMMY = [
  { id: '멋사', title: '멋사', type: 'IT', img: likelion },
  { id: '몰루', title: '몰루', type: 'art', img: test1 },
  { id: '몰루1', title: '몰루1', type: '사회', img: test1 },
  { id: '몰루2', title: '몰루2', type: 'scholar', img: test1 },
  { id: '몰루3', title: '몰루3', type: 'gym', img: test1 },
];

const Buttons = [{id: 1, title:'전체'}, {id: 2, title:'IT'},{id: 3, title:'사회'},]

export default function DongariIntro() {
  const [menu, setMenu] = useState('전체');

  const menuClickController = (e) => {
    const test1 = DUMMY.filter((prod) => 
      (prod.type === e.target.value)
    )
    if (e.target.value === '전체') {
      console.log('전체');
      setMenu('전체');
    } else {
      console.log(test1[0].type);
      setMenu(test1[0].type);
    }
  };

  const menuShowController = () => {
    if (menu === '전체') {
      return (
        DUMMY.map((prod) => {
          return (
            <li key={prod.id}>
              <Link to={`${prod.id}`}>
                <img src={prod.img} />
                {prod.title}
              </Link>
            </li>
          );
        })
      );
    } else {
      const test1 = DUMMY.filter((prod) => prod.type === menu)
      return (
        test1.map((prod) => {
          return (
            <li key={prod.id}>
          <Link to={`${prod.id}`}>
            <img src={prod.img} />
            {prod.title}
          </Link>
        </li>
          );
        })
      );
    }
  };
  return (
    <>
      <ul>
        {Buttons.map((prod) => {
          return(
            <li key = {prod.id}>
              <button onClick={menuClickController} value={prod.title}>{prod.title}</button>
            </li>
          )
        })}
      </ul>
      <ul>
        {menuShowController()}
      </ul>
    </>
  );
}
