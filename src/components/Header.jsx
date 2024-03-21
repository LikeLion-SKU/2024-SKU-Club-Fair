import { NavLink } from 'react-router-dom';
import { GlobalHeader, GlobalHeaderContainer } from '../styles/Global';

export default function Header() {
  return (
    <GlobalHeaderContainer>
      <GlobalHeader>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                textDecoration: isActive
                  ? 'line-through 1px double'
                  : undefined,
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/intro"
            style={({ isActive }) => {
              return {
                textDecoration: isActive
                  ? 'line-through 1px double'
                  : undefined,
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
                textDecoration: isActive
                  ? 'line-through 2px double'
                  : undefined,
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
                textDecoration: isActive
                  ? 'line-through 2px double'
                  : undefined,
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
