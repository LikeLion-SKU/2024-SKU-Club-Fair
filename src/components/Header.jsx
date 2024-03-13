import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/intro">동아리소개</Link>
          </li>
          <li>
            <Link to="/booth">동아리부스</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
