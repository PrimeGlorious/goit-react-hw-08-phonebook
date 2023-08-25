import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import {LayoutHeader, Container} from './Layout.styled'

function Layout() {
  return (
    <>
      <LayoutHeader>
        <Container>
          <Navigation />
        </Container>
      </LayoutHeader>
      <Outlet />
    </>
  );
}

export { Layout };
