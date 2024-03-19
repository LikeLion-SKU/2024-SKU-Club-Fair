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
                textDecoration: isActive ? 'underline' : undefined,
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
                textDecoration: isActive ? 'underline' : undefined,
              };
            }}
          >
            동아리소개
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booth"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : undefined,
              };
            }}
          >
            동아리부스
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : undefined,
              };
            }}
          >
            about
          </NavLink>
        </li>
      </GlobalHeader>
    </GlobalHeaderContainer>
  );
}
