import { Container } from 'components/App/App.styled';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, LinkWrap } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <LinkWrap>
          <NavLink to="/">Home</NavLink>
          <NavLink to="catalog">Catalog</NavLink>
          <NavLink to="favorite">Favorite</NavLink>
        </LinkWrap>
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
