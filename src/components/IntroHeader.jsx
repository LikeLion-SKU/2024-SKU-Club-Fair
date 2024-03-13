import { Link } from 'react-router-dom';

const routers = [
  { id: 'IT' },
  { id: 'IT' },
  { id: 'IT' },
  { id: 'IT' },
  { id: 'IT' },
  { id: 'IT' },
  { id: 'IT' },
  { id: 'IT' },
];
export default function IntroHeader() {
  return (
    <>
      <p>
        <Link to="/intro">전체</Link>
      </p>
      <p>
        <Link to="/intro">IT</Link>
      </p>
      <p>
        <Link to="/intro">문화예술공연</Link>
      </p>
      <p>
        <Link to="/intro">봉사사회</Link>
      </p>
      <p>
        <Link to="/intro">학술교양</Link>
      </p>
      <p>
        <Link to="/intro">창업취업</Link>
      </p>
      <p>
        <Link to="/intro">체육</Link>
      </p>
      <p>
        <Link to="/intro">친목</Link>
      </p>
    </>
  );
}
