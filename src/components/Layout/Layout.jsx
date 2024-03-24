import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, HeaderLink, LinkWrap } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <LinkWrap>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="catalog">Catalog</HeaderLink>
          <HeaderLink to="favorite">Favorite</HeaderLink>
        </LinkWrap>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
