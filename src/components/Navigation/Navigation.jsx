import { getIsLoggedIn, getName } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import {StyledLink, NavigationNavbar, NavigationList, NavigationWrap, NavigationText, NavigationBtn} from './Navigation.styled'

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getName);

  const onLogOutClick = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <NavigationNavbar>
      <NavigationList fontWeight="medium" fontSize="sm">
        <li>
          <StyledLink to="/">
            Home
          </StyledLink>
        </li>

        <li>
          <StyledLink to="/contacts">
            Contacts
          </StyledLink>
        </li>
      </NavigationList>
      {!isLoggedIn ? (
        <NavigationList fontWeight="medium" fontSize="sm">
          <li>
            <StyledLink to="/login">
              Log in
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/register">
              Sign up
            </StyledLink>
          </li>
        </NavigationList>
      ) : (
        <NavigationWrap>
          <NavigationText>{userName}</NavigationText>
          <Avatar width={30} height={30}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>

          <NavigationBtn onClick={onLogOutClick} type="button">
            Log out
          </NavigationBtn>
        </NavigationWrap>
      )}
    </NavigationNavbar>
  );
}

export { Navigation };
