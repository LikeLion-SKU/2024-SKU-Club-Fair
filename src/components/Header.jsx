import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <GlobalHeaderContainer>
      <GlobalHeader>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline 3px' : undefined,
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/schedule"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline 3px' : undefined,
              };
            }}
          >
            공연 정보
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booth"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline 3px' : undefined,
              };
            }}
          >
            부스 소개
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline 3px' : undefined,
              };
            }}
          >
            제작자
          </NavLink>
        </li>
      </GlobalHeader>
    </GlobalHeaderContainer>
  );
}
