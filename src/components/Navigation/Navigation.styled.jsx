import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  transition: color 250 linear;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #18272F;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  &:hover {
    color: white;
  }
`;

export const NavigationNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
   height: 40px;
   align-items: center;
`

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`

export const NavigationWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const NavigationText = styled.p`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: color 250 linear;

  &:hover {
    color: white;
  }
`

export const NavigationBtn = styled.button`
  font-size: 18px;
  font-weight: 500;
  transition: color 250 linear;

  &:hover {
    color: white;
  }
`
